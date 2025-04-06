import React from 'react';

const Tournament = () => {
  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="flex">
        {/* Left side (Upper Bracket) */}
        <div className="w-1/2 pr-4">
          <div className="mb-4">
            {/* Round 1 */}
            <div className="flex items-center space-x-4">
              <div className="w-1/2">
                <div className="bg-white p-2 rounded border border-gray-300 text-center">Team A</div>
              </div>
              <div className="w-1/2">
                <div className="bg-white p-2 rounded border border-gray-300 text-center">Team B</div>
              </div>
            </div>
          </div>

          {/* Add more rounds and games here... */}
        </div>

        {/* Right side (Lower Bracket) */}
        <div className="w-1/2 pl-4">
          <div className="mb-4">
            {/* Round 1 */}
            <div className="flex items-center space-x-4">
              <div className="w-1/2">
                <div className="bg-white p-2 rounded border border-gray-300 text-center">Team C</div>
              </div>
              <div className="w-1/2">
                <div className="bg-white p-2 rounded border border-gray-300 text-center">Team D</div>
              </div>
            </div>
          </div>

          {/* Add more rounds and games here... */}
        </div>
      </div>
    </div>
  );
};

export default Tournament; 
