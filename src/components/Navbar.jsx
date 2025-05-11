import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Statistics', id: 'statistics' },
    { label: 'For Companies', id: 'companies' },
    { label: 'Contact', id: 'contact' }
  ];
  

  return (
    <nav className="fixed top-0 left-0 right-0 scroll-smooth bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              Forsa<span className="text-indigo-600">Tech</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
  <a
    key={item.id}
    href={`#${item.id}`}
    className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-[15px] px-3 py-2"
  >
    {item.label}
  </a>
))}

            <button className="bg-gradient-to-r from-blue-500  to-purple-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all hover:opacity-90 ml-2 text-sm font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile   */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile  */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 py-4 px-6 shadow-lg">
            {navItems.map((item) => (
  <a
    key={item.id}
    href={`#${item.id}`}
    className="block py-3 text-gray-700 hover:text-indigo-600 font-medium border-b border-gray-100"
    onClick={() => setMenuOpen(false)}
  >
    {item.label}
  </a>
))}

            <button className="w-full mt-4 bg-gradient-to-r from-blue-500  to-indigo-600 text-white py-3 rounded-lg shadow-md font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;