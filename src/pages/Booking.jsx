import { useState, useEffect } from "react";
import { services } from "../constants"; // import services array
import { AnimatePresence, motion } from "framer-motion"; // add framer-motion
import emailjs from "emailjs-com"; // import emailjs

function Booking() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Lock scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const validate = () => {
    const newErrors = {};
    if (!fields.name.trim()) newErrors.name = "Name is required";
    if (!fields.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!fields.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{7,15}$/.test(fields.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!fields.service) newErrors.service = "Please select a service";
    if (!fields.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      // All form data is in the 'fields' object
      // EmailJS sends this info as an email to your configured recipient
      // Example: fields.name, fields.email, fields.phone, fields.service, fields.message

      emailjs
        .send(
          "service_zd0btri", // e.g. "service_xxx"
          "YOUR_TEMPLATE_ID", // e.g. "template_xxx"
          {
            name: fields.name,
            email: fields.email,
            phone: fields.phone,
            service: fields.service,
            message: fields.message,
          },
          "YOUR_USER_ID" // e.g. "user_xxx"
        )
        .then(() => {
          // Success: email sent to company (recipient set in EmailJS template)
          setOpen(false);
          setFields({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        })
        .catch((err) => {
          alert("Failed to send. Please try again.");
        });
    }
  };

  return (
    <section className="bg-hero-pattern">
      <div className="text-primary font-cVariable w-9/12 md:w-4/6 mx-auto min-h-screen flex flex-col justify-center items-center content-evenly space-y-[3rem] pt-20 ">
        <div className="bg-white/80 rounded-[20px] p-8 w-full md:w-3/4 shadow-lg flex flex-col items-center space-y-6">
          <h1 className="text-clamp text-center font-cSemibold relative">
            Ready to work!
          </h1>
          <p className="text-clamp_text text-center font-cRegular text-[#3F3E3E]">
            Fill out the form below to book a session with our team. We look forward to collaborating with you and bringing your vision to life!
          </p>
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-cMedium hover:bg-secondary-default transition-all duration-200 ease-linear"
            onClick={() => setOpen(true)}
          >
            Book Now
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed -top-20 inset-0 z-50 flex items-center justify-center bg-black/40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <motion.div
                className="bg-white rounded-[20px] p-8 w-full max-w-md shadow-xl relative"
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30, duration: 0.18 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-primary text-3xl"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-clamp_name font-cSemibold mb-4 text-center">Booking Request</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className={`border ${errors.name ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 font-cRegular focus:outline-primary`}
                      value={fields.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={`border ${errors.email ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 font-cRegular focus:outline-primary`}
                      value={fields.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      className={`border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 font-cRegular focus:outline-primary`}
                      value={fields.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <select
                      name="service"
                      className={`border ${errors.service ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 font-cRegular focus:outline-primary`}
                      value={fields.service}
                      onChange={handleChange}
                      required
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
                    {errors.service && <span className="text-red-500 text-xs">{errors.service}</span>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      className={`border ${errors.message ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 font-cRegular focus:outline-primary resize-none`}
                      rows={4}
                      value={fields.message}
                      onChange={handleChange}
                      required
                    />
                    {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-full font-cMedium hover:bg-secondary-default transition"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Booking;