import { useState } from "react";
import { services } from "../constants"; // import services array

function Booking() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-hero-pattern min-h-screen">
      <div className="text-primary font-cVariable w-9/12 md:w-4/6 mx-auto min-h-screen flex flex-col justify-center items-center content-evenly space-y-[3rem] py-24">
        <div className="bg-white/80 rounded-[20px] p-8 w-full md:w-3/4 shadow-lg flex flex-col items-center space-y-6">
          <h1 className="text-clamp text-center font-cSemibold relative">
            Ready to work!
          </h1>
          <p className="text-clamp_text text-center font-cRegular text-[#3F3E3E]">
            Fill out the form below to book a session with our team. We look forward to collaborating with you and bringing your vision to life!
          </p>
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-cMedium hover:bg-secondary-default transition"
            onClick={() => setOpen(true)}
          >
            Book Now
          </button>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-[20px] p-8 w-full max-w-md shadow-xl relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-clamp font-cSemibold mb-4 text-center">Book a Session</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded px-4 py-2 font-cRegular focus:outline-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded px-4 py-2 font-cRegular focus:outline-primary"
                  required
                />
                {/* Service selection dropdown */}
                <select
                  className="border border-gray-300 rounded px-4 py-2 font-cRegular focus:outline-primary"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  className="border border-gray-300 rounded px-4 py-2 font-cRegular focus:outline-primary resize-none"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-full font-cMedium hover:bg-secondary-default transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Booking;