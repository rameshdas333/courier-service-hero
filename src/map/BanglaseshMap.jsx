




BangladeshMap.jsx
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState} from "react";
import { useLoaderData } from "react-router";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

function FlyToLocation({ position }) {
  const map = useMap();
  if (position) {
    map.flyTo(position, 12, { duration: 1.5 });
  }
  return null;
}

export default function BangladeshMap({ searchTerm, searchClick }) {
  const wareHouseService = useLoaderData();
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const filteredDistricts = wareHouseService.filter(
    (d) =>
      d.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fly to first match when search button is clicked
  useEffect(() => {
    if (searchClick && filteredDistricts.length > 0) {
      const first = filteredDistricts[0];
      setSelectedDistrict([first.latitude, first.longitude]);
    }
  }, [searchClick, filteredDistricts]);

  const handleSelect = (district) => {
    setSelectedDistrict([district.latitude, district.longitude]);
  };

  return (
    <div className="flex flex-col items-center py-10 bg-white shadow-xl rounded-2xl w-full">
      {/* Dropdown results */}
      {searchTerm && filteredDistricts.length > 0 && (
        <div className="mb-4 w-3/4 md:w-1/2 max-h-40 overflow-y-auto border rounded shadow p-2 bg-white">
          {filteredDistricts.map((district, idx) => (
            <div
              key={idx}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(district)}
            >
              {district.district} - {district.city}
            </div>
          ))}
        </div>
      )}

      <MapContainer
        center={[23.685, 90.3563]}
        zoom={8}
        className="h-[500px] w-full md:w-3/4 rounded-2xl shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {wareHouseService.map((center, index) => (
          <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong>
              <br />
              {center.covered_area.join(", ")}
              <br />
              Delivery available 🚚
            </Popup>
          </Marker>
        ))}

        {selectedDistrict && <FlyToLocation position={selectedDistrict} />}
      </MapContainer>
    </div>
  );
}




// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import { useState } from "react";
// import { useLoaderData } from "react-router";

// // Custom marker icon fix
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
// });

// // Component to fly to selected position
// function FlyToLocation({ position }) {
//   const map = useMap();
//   if (position) {
//     map.flyTo(position, 12, { duration: 1.5 }); // zoom level 12, 1.5 sec animation
//   }
//   return null;
// }

// export default function BangladeshMap() {
//   const wareHouseService = useLoaderData();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState(null);

//   const filteredDistricts = wareHouseService.filter(
//     (d) =>
//       d.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       d.city.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSelect = (district) => {
//     setSelectedDistrict([district.latitude, district.longitude]);
//   };

//   return (
//     <div className="flex flex-col items-center py-10 bg-white shadow-xl rounded-2xl">
//       <input
//         type="text"
//         placeholder="Search district or city..."
//         className="mb-4 p-2 border rounded w-3/4 md:w-1/2"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Dropdown results */}
//       {searchTerm && filteredDistricts.length > 0 && (
//         <div className="mb-4 w-3/4 md:w-1/2 max-h-40 overflow-y-auto border rounded shadow p-2 bg-white">
//           {filteredDistricts.map((district, idx) => (
//             <div
//               key={idx}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleSelect(district)}
//             >
//               {district.district} - {district.city}
//             </div>
//           ))}
//         </div>
//       )}

//       <MapContainer
//         center={[23.685, 90.3563]} // Bangladesh center
//         zoom={8}
//         className="h-[500px] w-full md:w-3/4 rounded-2xl shadow-lg"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {wareHouseService.map((center, index) => (
//           <Marker key={index} position={[center.latitude, center.longitude]}>
//             <Popup>
//               <strong>{center.district}</strong>
//               <br />
//               {center.covered_area.join(", ")}
//               <br />
//               Delivery available 🚚
//             </Popup>
//           </Marker>
//         ))}

//         {/* Fly to selected district */}
//         {selectedDistrict && <FlyToLocation position={selectedDistrict} />}
//       </MapContainer>
//     </div>
//   );
// }


