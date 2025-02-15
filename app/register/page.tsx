/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { StarBackground } from '@/components/StarBackground';

interface EventData {
  name: string;
  soloPrice?: number; // Price for solo participation (optional)
  teamPrice?: number; // Price for team participation (optional)
  hasSolo: boolean;   // Flag to indicate if solo is allowed
  hasTeam: boolean;   // Flag to indicate if team is allowed
  minTeamMembers?: number; // Optional minTeamMembers
  maxTeamMembers?: number;
}

const eventData: EventData[] = [
  {
    name: 'Run for The One Piece (Treasure Hunt)',
    teamPrice:300,
    hasSolo: false,
    hasTeam: true,
    minTeamMembers: 3,
    maxTeamMembers: 6,
  },
  {
    name: 'Model Display',
    soloPrice: 100,
    hasSolo: true,
    hasTeam: false,
    minTeamMembers:2,
    maxTeamMembers: 5, // Solo only event, no teamPrice
  },
  {
    name: 'Poster Presentation',
    soloPrice: 250,
    teamPrice: 400,
    hasSolo: true,
    hasTeam: true,
    minTeamMembers: 2,
    maxTeamMembers: 3,
  },
  {
    name: 'Super Coders',
    soloPrice: 60,
    teamPrice: 100,
    hasSolo: true,
    hasTeam: true,
    maxTeamMembers: 2,
    minTeamMembers: 2,
  },
  {
    name: 'Web Devs',
    soloPrice: 60,
    teamPrice: 100,
    hasSolo: true,
    hasTeam: true,
    maxTeamMembers:2,
    minTeamMembers: 2,
  },
  {
    name: 'Vision Hack (Mini Hackathon)',
    teamPrice: 300,
    hasSolo: false,
    hasTeam: true,
    minTeamMembers: 3,
    maxTeamMembers: 6,
  },
];

const RegisterPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [participationType, setParticipationType] = useState<'solo' | 'team'>('solo');
  const [teamMembers, setTeamMembers] = useState<string[]>(['']); // For team member inputs

  const selectedEventData = eventData.find(event => event.name === selectedEvent);

  const handleAddTeamMember = () => {
    if (teamMembers.length < (selectedEventData?.maxTeamMembers || 1) - 1) {
      setTeamMembers([...teamMembers, '']);
    }
  };

  const handleRemoveTeamMember = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  // Calculate price based on participation type
  const calculatedPrice = participationType === 'solo'
    ? selectedEventData?.soloPrice
    : selectedEventData?.teamPrice;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white p-6">
      {/* Background Stars Component */}
      {/* <div className="absolute inset-0 z-10">
        <StarBackground/>
      </div> */}
      <div className="relative z-10 w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Techfest Registration</h1>
          <p className="text-xl">Select an event and participation type to register</p>
        </header>

        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Event</h2>
          <select
            className="w-full p-3 border border-gray-700 bg-gray-800 rounded-md mb-6 text-white"
            value={selectedEvent}
            onChange={(e) => {
              setSelectedEvent(e.target.value);
              setTeamMembers(['']); // Reset team members if a new event is selected
              setParticipationType('solo'); // Default to solo when an event is selected
            }}
          >
            <option value="" disabled>Select an event</option>
            {eventData.map((event) => (
              <option key={event.name} value={event.name}>
                {event.name}
              </option>
            ))}
          </select>

          {selectedEvent && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Register for {selectedEvent}
                </h3>
                <p className="text-center mb-2">Event Price: ₹{calculatedPrice}</p>
                <p className="text-center text-sm text-gray-400 mb-4">
                  Choose your participation type
                </p>

                {/* Participation Type Selection */}
                <div className="flex justify-center gap-4 mb-6">
                  {selectedEventData?.hasSolo && (
                    <label>
                      <input
                        type="radio"
                        value="solo"
                        checked={participationType === 'solo'}
                        onChange={() => setParticipationType('solo')}
                      />
                      Solo
                    </label>
                  )}
                  {selectedEventData?.hasTeam && (
                    <label>
                      <input
                        type="radio"
                        value="team"
                        checked={participationType === 'team'}
                        onChange={() => setParticipationType('team')}
                      />
                      Team
                    </label>
                  )}
                </div>
              </div>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md text-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md text-white"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md text-white"
                  required
                />

                {/* Team Members Section */}
                {participationType === 'team' && selectedEventData?.minTeamMembers && (
                  <div>
                    <p className="text-sm mb-4 text-gray-400">
                      Add your team members (minimum {selectedEventData.minTeamMembers}, up to {selectedEventData.maxTeamMembers} members)
                    </p>
                    {teamMembers.map((_, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          placeholder={`Team Member ${index + 2} Name`}
                          className="w-full p-3 border border-gray-700 bg-gray-900 rounded-md text-white"
                          required
                        />
                        <button
                          type="button"
                          className="bg-red-500 px-2 py-1 rounded-md"
                          onClick={() => handleRemoveTeamMember(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}

                    {/* Add Team Member Button */}
                    {teamMembers.length < (selectedEventData?.maxTeamMembers || 1) - 1 && (
                      <button
                        type="button"
                        className="bg-green-500 w-full py-2 rounded-md"
                        onClick={handleAddTeamMember}
                      >
                        Add Team Member
                      </button>
                    )}
                  </div>
                )}

                <div className="bg-gray-700 p-4 rounded-md shadow-sm">
                  <img
                    src="/UPI.png"
                    alt="UPI QR Code"
                    className="w-25 h-25 mx-auto mb-4"
                  />
                  <p className="text-center mb-2">Event Price: ₹{calculatedPrice}</p>
                  <p className="text-center text-sm text-gray-400">
                    Please pay the amount and upload the screenshot below.
                  </p>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md mt-4 text-white"
                    accept="image/*"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
