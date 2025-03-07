import { FaInstagram, FaTwitter, FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function HeaderFooter() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="bg-[#020233] text-white py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png" // Replace with the actual logo
              alt="Logo"
              className="h-10"
            />
            <span className="text-lg font-semibold">
              Dr. Mahesh Krishnan <br />
              D.Ortho, DNB.Ortho
            </span>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 text-lg">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Speciality
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Footer */}
      <footer className="mt-auto bg-white py-6 px-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-500 p-2 rounded-lg bg-blue-100">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-blue-500 p-2 rounded-lg bg-blue-100">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-blue-500 p-2 rounded-lg bg-blue-100">
            <FaTelegram size={20} />
          </a>
          <a href="#" className="text-blue-500 p-2 rounded-lg bg-blue-100">
            <FaWhatsapp size={20} />
          </a>
        </div>
        <p className="text-gray-600">© 2025 Dr. Mahesh Krishnan</p>
        <div className="mt-4">
          <a href="#" className="text-gray-500 hover:text-gray-800">
            ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
