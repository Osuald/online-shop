import { Link } from "react-router-dom";
const menuBar = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/career" },
];

const Navbar = ({ title }) => {
  return (
    <div className="fixed top-0 left-0 z-50 right-0 p-4 flex justify-between items-center  shadow-lg bg-gray-700 text-white">
      <h1 className="text-xl font-bold border p-2 rounded-full border-3">
        FOS
      </h1>
      <div className="text-3xl font-bold mb-4">
        {title ? title : "Fancy Online Shop"}
      </div>
      <div>
        {menuBar.map((item) => (
          <span
            key={item}
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
