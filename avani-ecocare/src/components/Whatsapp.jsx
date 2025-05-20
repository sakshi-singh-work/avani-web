import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! This is a custom message.");
    const phoneNumber = "919910852911";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect the user to WhatsApp chat with custom message
    window.open(url, "_blank");
  };

  return (
    <div>
      <FaWhatsapp size={32} onClick={handleWhatsAppClick} />
    </div>
  );
};
