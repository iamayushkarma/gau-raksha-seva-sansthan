import { FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="h-16 flex justify-between px-4 md:px-6 lg:px-8 items-center border-b border-divider bg-transparent">
      <div className="flex items-center">
        <p className="text-xl md:text-2xl font-semibold text-text-primary">
          Logo
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <a
          href="https://wa.me/number"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-primary-lighter hover:bg-primary-light text-text-primary transition-colors duration-200"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
        <button className="bg-primary hover:bg-hover active:bg-active px-4 py-2 font-medium rounded-md border border-primary-dark transition-colors duration-200">
          Donate
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
