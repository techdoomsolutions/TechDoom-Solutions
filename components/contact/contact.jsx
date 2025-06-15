import Image from "next/image";
export default function Contact() {
  return (
    <>
      <div>
        {/* Header Section */}
        <div className="items-center ">
          <h1 className=" text-green-500 font-bold text-4xl text-center z-10 ">
            Contact Us
          </h1>
        </div>

        <div className="flex text-white mx-auto  p-12  w-max-7xl">
            
          <div className="flex flex-col lg:flex-row justify-center ">
            <div className="bg-black rounded-2xl">
              <Image src="/man.png" alt="man img" width={500} height={250} className="items-center "/>
            </div>
            <div className="p-6  text-base ">
              <form className="space-y-4 border-2 border-green-400 p-10 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                  <div>
                    <label className="text-black">Your Name:</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border-2 rounded-2xl border-greem-200 bg-transparent text-green-300 p-2 "
                    />
                  </div>
                  <div>
                    <label className="text-black">Your Email:</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border-2 rounded-2xl border-greem-200 bg-transparent text-green-300 p-2 "
                    />
                  </div>
                  <div>
                    <label className="text-black">Phone No:</label>
                    <input
                      type="tel"
                      name="ph_no"
                      required
                      className="w-full border-2 rounded-2xl border-greem-200 bg-transparent text-green-300 p-2 "
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-black">Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full border-2 rounded-2xl border-greem-200 bg-transparent text-green-300 p-2" 
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-black">Message:</label>
                  <textarea
                    name="message"
                    required
                    className="w-full border-2 rounded-2xl border-greem-200 bg-transparent text-green-300 p-2 "
                  />
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button className="bg-green-500 text-white rounded-lg hover:text-black p-2 text-bold uppercase ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
