import { useState } from "react";
import { Facebook, Instagram, X } from "lucide-react";
import { Api } from "../Components/Api/Api";

const PopupForm = ({ showForm, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // NEW: booking status

  if (!showForm) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // user clicked "Book a Call"

    try {
      await Api.createContact({ ...formData });

      setLoading(false);
      setSubmitted(true);      // show success message
      setFormData({ name: "", phone: "", email: "" });
    } catch (err) {
      setLoading(false);
      console.error("API Error:", err.response?.data || err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#142241] p-8 rounded-lg shadow-lg w-96 h-auto relative flex flex-col justify-center">

        {/* Close button */}
        <button
          className="absolute -top-3 hover:cursor-pointer -right-3 w-8 h-8 flex items-center justify-center border bg-[#C9966B] rounded-full text-black hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-6 text-start">
          Let’s create the <br /> home you imagine.
        </h2>

        {!submitted ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded text-white placeholder-white/70"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded text-white placeholder-white/70"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded text-white placeholder-white/70"
            />

            <button
              type="submit"
              disabled={loading} // disable when loading
              className={`bg-white/20 backdrop-blur-md hover:cursor-pointer border border-white/30 text-white p-3 rounded transition-all mt-2 
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-white/30 hover:text-blue-100"}
              `}
            >
              {loading ? "Booking..." : "Book a call"}
            </button>
          </form>
        ) : (
          // Success Message
          <div className="flex flex-col items-center justify-start gap-4 p-3">
            <p className="text-green-400 text-start font-semibold text-2xl">
              Thanks for submission! <br /> We will contact you soon.
            </p>
          </div>
        )}

        {/* Social Icons */}
       <div className="flex justify-center gap-6 mt-6 text-[#C9966B]">
  <a 
    href="https://www.facebook.com/share/1VND5cUr6D/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Facebook className="w-6 h-6" />
  </a>

  <a 
    href="https://www.instagram.com/ak_designkoncepts?igsh=a3I2Ym9vbWI1bGoz" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Instagram className="w-6 h-6" />
  </a>

  <a 
    href="https://x.com/AruhKoncepts?t=W3JwQLkpvg05ZnV4F_-vxw&s=09" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <X className="w-6 h-6" />
  </a>
</div>

      </div>
    </div>
  );
};

export default PopupForm;
