import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Four columns of footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">PoolPass</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pool-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Guests</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pools" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Find Pools
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hosts</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/host" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link to="/host-resources" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/host-forum" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link to="/responsible-hosting" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Responsible Hosting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-pool-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with logo and social icons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <img
                src="/poolpass-uploads/b0a133cd-7024-42bb-b333-dc78e02d1272.png"
                alt="PoolPass Logo"
                className="h-24 md:h-28 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=PoolPass';
                }}
              />
            </div>

            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-500 hover:text-pool-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/poolpassuk/"
                className="text-gray-500 hover:text-pool-primary transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 3a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm5.5-.5a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/poolpass"
                className="text-gray-500 hover:text-pool-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM7 19h-3v-10h3v10zM5.5 7.6c-1 0-1.6-.7-1.6-1.5s.6-1.5 1.6-1.5c1 0 1.6.7 1.6 1.5s-.6 1.5-1.6 1.5zM20 19h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9v5.4h-3s.1-8.8 0-9.7h3v1.4c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1v5.7z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/poolpassuk"
                className="text-gray-500 hover:text-pool-primary transition-colors"
                aria-label="X (formerly Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.59 3H17.6l-4.2 5.35L8.5 3H3l6.98 9.62L3 21h3.01l4.88-6.23L15.5 21h5.5l-7.22-9.96L20.59 3z" />
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
