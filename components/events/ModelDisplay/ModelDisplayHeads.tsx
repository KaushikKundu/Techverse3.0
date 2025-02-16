export function ModelDisplayHeads() {
    return (
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {/* event price */}
          </span>{" "}
          
        </p>
        {/* <Image
          src="/images/supercoders.jpeg"
          alt="Macbook mockup from Aceternity UI"
          width={500}
          height={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        /> */}
        <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        For any furthur queries please contact:
        </p>
        <div className="sm:flex justify-between">
          <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Event Head: Tama Talukder <br />
            Phone: +91 62906 71329 <br />
            Email: tamatalukder329@gmail.com
          </p>
          <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Co-Event Head: Tanushree Dutta <br />
            Phone: +91 74397 60040 <br />
            Email: td92929@gmail.com
          </p>
        </div>
      </div>
    );
  };