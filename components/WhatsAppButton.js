const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

const message =
  "Hello, how do I make my payment on here for VIP Backstage Meet & Greet?";

export default function WhatsAppButton() {
  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      HOW DO I MAKE MY PAYMENT?
    </a>
  );
}