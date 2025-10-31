import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
 const form = useRef();
 const [captchaValue, setCaptchaValue] = useState(null);
 const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
     if (!captchaValue) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          setIsSending(false);
          form.current.reset();
          setCaptchaValue(null);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <div 
    id = "contact"
    style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1594')`,
    }}
    className="min-h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center px-6 sm:px-10 py-12">
    {/* Neon edge glow */}

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-cyan-300/10 backdrop-blur-2xl border border-blue-600/20 shadow-2xl rounded-3xl p-6 sm:p-10 text-white flex flex-col gap-5 sm:gap-6 "
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Let’s Connect
        </h2>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm sm:text-base placeholder-gray-400 focus:border-blue-400 outline-none transition duration-300"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm sm:text-base placeholder-gray-400 focus:border-blue-400 outline-none transition duration-300"
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm sm:text-base placeholder-gray-400 focus:border-blue-400 outline-none transition duration-300 resize-none"
            placeholder="Your message..."
          ></textarea>
        </div>

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem"
        }}>
        <ReCAPTCHA 
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={(value) => setCaptchaValue(value)}
       />
       </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={isSending}
          className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-sm sm:text-base tracking-wide transition-shadow shadow-lg hover:shadow-cyan-500/30"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
             {isSending ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
      </div>

  );
}

export default ContactForm;
