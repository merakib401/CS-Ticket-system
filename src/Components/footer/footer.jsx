
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-8 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            CS — Ticket System
          </h2>
          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Contact Sales</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Products & Services
            </li>
            <li className="hover:text-white cursor-pointer">
              Customer Stories
            </li>
            <li className="hover:text-white cursor-pointer">Download Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Join Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
