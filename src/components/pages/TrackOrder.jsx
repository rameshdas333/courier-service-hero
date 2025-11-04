// TrackOrder.jsx
import React, { useState } from 'react';
import DistrictMap from '../../map/BanglaseshMap';

const TrackOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClick, setSearchClick] = useState(false);

 

  return (
    <div className="p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        We are available in <span className="text-green-600">64 districts</span>
      </h1>

      <div className="flex justify-center mt-6">
        <div className="input input-bordered flex items-center gap-2 w-full md:w-1/2">
          <input
            type="text"
            className="grow p-2 "
            placeholder="Search district or city..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSearchClick(false); // reset when typing
            }}
          />
          {/* <button
            className="btn btn-success btn-sm"
            onClick={handleSearchClick}
          >
            Search
          </button> */}
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
          We deliver almost all over Bangladesh
        </h2>

        {/* Pass searchTerm and searchClick to the map */}
        <DistrictMap searchTerm={searchTerm} searchClick={searchClick} />
      </div>
    </div>
  );
};

export default TrackOrder;

