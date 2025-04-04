import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const contacts = [
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      href: "https://github.com/Aniket7745",
      color: "hover:text-[#6e5494]"
    },
    {
      icon: <FaXTwitter className="text-2xl" />,
      label: "X.com",
      href: "https://x.com/AniketKundu_",
      color: "hover:text-gray-100"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      href: "mailto:your-email@example.com",
      color: "hover:text-emerald-400"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full overflow-auto no-scrollbar hide-scrollbar">
      <h2 className="text-xl font-bold text-white/90 font-outfit">Contact Me</h2>
      <div className="flex flex-col gap-4 w-full">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 p-3 rounded-lg 
              backdrop-blur-sm bg-black/20 border border-gray-500/50 
              transition-all duration-300 hover:scale-105 
              hover:bg-black/30 hover:border-emerald-500/50 ${contact.color}`}
          >
            {contact.icon}
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              {contact.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;