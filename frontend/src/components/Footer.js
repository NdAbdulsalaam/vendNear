// File: src/components/Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 border-t">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h2>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-96 px-4 py-2 border rounded focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Call Now: 08168874902</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
              <li><a href="#" className="hover:underline">Book an Appointment</a></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Find a Boutique</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Corporate Social Responsibility</a></li>
            </ul>
          </div>

          {/* Legal Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Area</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Conditions of Sale</a></li>
              <li><a href="#" className="hover:underline">Credits</a></li>
              <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FontAwesomeIcon icon={faPinterest} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-400 text-center py-4 mt-8">
        <div className="container mx-auto px-4">
          <p>
            SHOP IN: Nigeria{' '}
            <span className="underline cursor-pointer hover:text-gray-200">Change Country</span>
          </p>
          <p className="mt-2">COPYRIGHT © {currentYear} CARTIER</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
