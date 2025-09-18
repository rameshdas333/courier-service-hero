import { IconContext } from "react-icons";
import { FaBox } from "react-icons/fa";

const ServiceCard = ({ title, description, highlight }) => {
  return (
    <div
      className={`card shadow-md rounded-2xl p-6 text-center transition duration-300 ${
        highlight ? "bg-lime-100" : "bg-white"
      }`}
    >
      <IconContext.Provider value={{ size: "2em", className: "mx-auto text-primary" }}>
        <FaBox />
      </IconContext.Provider>
      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
