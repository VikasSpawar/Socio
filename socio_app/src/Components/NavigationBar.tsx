import React from "react";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white"
                >
                  Feed
                </Link>
                <Link
                  to="/create-post"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white"
                >
                  Create Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
