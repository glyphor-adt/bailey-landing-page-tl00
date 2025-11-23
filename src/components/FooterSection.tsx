import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p className="text-sm">
              123 Main Street
              <br />
              Anytown, USA 12345
            </p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (555) 555-5555</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-primary text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;