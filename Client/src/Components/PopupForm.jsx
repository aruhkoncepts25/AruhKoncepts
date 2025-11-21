import { useState, useEffect } from "react";
import { Facebook, Instagram, X } from "lucide-react";
import { Api } from "../Components/Api/Api";

const PopupForm = ({ showForm, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Automatically show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showForm) {
        window.showPopupForm?.();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [showForm]);

  if (!showForm) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await Api.createContact({ ...formData });

      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "" });
    } catch (err) {
      setLoading(false);
      console.error("API Error:", err.response?.data || err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-[#142241] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 h-auto relative flex flex-col justify-center mx-auto">

        {/* Close button */}
        <button
          className="absolute -top-3 hover:cursor-pointer -right-3 w-8 h-8 flex items-center justify-center border bg-[#C9966B] rounded-full text-black hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4 sm:mb-6 text-start">
          Let's create the <br /> home you imagine.
        </h2>

        {!submitted ? (
          <form className="flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded text-white placeholder-white/70 text-sm sm:text-base"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded text-white placeholder-white/70 text-sm sm:text-base"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded text-white placeholder-white/70 text-sm sm:text-base"
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-white/20 backdrop-blur-md hover:cursor-pointer border border-white/30 text-white p-3 rounded transition-all mt-2 text-sm sm:text-base
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-white/30 hover:text-blue-100"}
              `}
            >
              {loading ? "Booking..." : "Book a call"}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-start justify-start gap-3">
            <p className="text-green-400 text-start font-semibold text-xl sm:text-2xl">
              Thanks for submission! <br /> We will contact you soon.
            </p>
          </div>
        )}

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 text-[#C9966B]">
          <a
            href="https://www.facebook.com/share/1VND5cUr6D/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.instagram.com/aruh_koncepts?igsh=aWNhNmpoMnZ5NGIy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://x.com/AruhKoncepts?t=W3JwQLkpvg05ZnV4F_-vxw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default PopupForm;