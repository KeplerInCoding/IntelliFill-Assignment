import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side with logo and social links */}
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>

        {/* Middle section with three columns */}
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-700">Link 1</a>
            <a href="#" className="text-gray-700">Link 2</a>
            <a href="#" className="text-gray-700">Link 3</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-700">Link 4</a>
            <a href="#" className="text-gray-700">Link 5</a>
            <a href="#" className="text-gray-700">Link 6</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-700">Link 7</a>
            <a href="#" className="text-gray-700">Link 8</a>
            <a href="#" className="text-gray-700">Link 9</a>
          </div>
        </div>

        {/* Right side with two small images */}
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/your/image1.png"
            alt="Image 1"
            className="h-8 w-8"
          />
          <img
            src="/path/to/your/image2.png"
            alt="Image 2"
            className="h-8 w-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
