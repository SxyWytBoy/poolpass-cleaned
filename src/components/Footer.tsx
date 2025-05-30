import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">PoolPass</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-pool-primary">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-pool-primary">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-pool-primary">Press</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-pool-primary">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Guests</h3>
            <ul className="space-y-2">
              <li><Link to="/pools" className="text-gray-600 hover:text-pool-primary">Find Pools</Link></li>
              <li><Link to="/gift-cards" className="text-gray-600 hover:text-pool-primary">Gift Cards</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-pool-primary">Help Centre</Link></li>
              <li><Link to="/safety" className="text-gray-600 hover:text-pool-primary">Safety</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hosts</h3>
            <ul className="space-y-2">
              <li><Link to="/host" className="text-gray-600 hover:text-pool-primary">Become a Host</Link></li>
              <li><Link to="/host-resources" className="text-gray-600 hover:text-pool-primary">Resources</Link></li>
              <li><Link to="/host-forum" className="text-gray-600 hover:text-pool-primary">Community Forum</Link></li>
              <li><Link to="/responsible-hosting" className="text-gray-600 hover:text-pool-primary">Responsible Hosting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-pool-primary">Help Centre</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pool-primary">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-pool-primary">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-pool-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <img
                src="/lovable-uploads/b0a133cd-7024-42bb-b333-dc78e02d1272.png"
                alt="PoolPass Logo"
                className="h-24 md:h-28 w-auto"
              />
            </div>

            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-pool-primary" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12..." clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://www.instagram.com/poolpassuk/" className="text-gray-500 hover:text-pool-primary" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06..." clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/poolpass" className="text-gray-500 hover:text-pool-primary" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM7 19h-3v-10h3v10zM5.5 7.6c-1 0-1.6-.7-1.6-1.5s.6-1.5 1.6-1.5c1 0 1.6.7 1.6 1.5s-.6 1.5-1.6 1.5zM20 19h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9v5.4h-3s.1-8.8 0-9.7h3v1.4c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1v5.7z"/>
                </svg>
              </a>

              <a href="https://twitter.com/poolpassuk" className="text-gray-500 hover:text-pool-primary" aria-label="X (formerly Twitter)" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.59 3H17.6l-4.2 5.35L8.5 3H3l6.98 9.62L3 21h3.01l4.88-6.23L15.5 21h5.5l-7.22-9.96L20.59 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
