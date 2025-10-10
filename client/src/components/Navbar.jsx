import { Link } from "react-router-dom";
const menuBar = [
  { name: "Home", id: 1, link: "/" },
  { name: "About", id: 2, link: "/about" },
  { name: "Contact", id: 3, link: "/contact" },
  { name: "Shop", id: 4, link: "/shop" },
  { name: "Dashboard", id: 5, link: "/dashboard" },
];

const Navbar = ({ title }) => {
  return (
    <div className="font-lato fixed top-0 left-0 z-50 right-0 p-4 flex justify-between items-center  shadow-lg bg-gray-700 text-white">
      <h1 className="text-xl font-bold border p-2 rounded-full border-3">
        FOS
      </h1>
      <div className="text-3xl font-lato font-bold mb-4">
        {title ? title : "Fancy Online Shop"}
      </div>
      <div>
        {menuBar.map((item) => (
          <span
            key={item.id}
            className="mx-2 cursor-pointer font-semibold hover:text-gray-500"
          >
            <Link to={item.link}>{item.name}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
