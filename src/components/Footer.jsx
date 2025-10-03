import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className="flex flex-col px-10 mt-10 text-white">
      <hr />
      <div className="flex justify-around p-4">
        <div className="">
          <p className="font-bold ">Quick Links</p>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="font-bold ">Support</p>
          <ul>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <p className="font-bold ">Contact</p>
          <ul>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div>
          <p className="font-bold ">Our Locations</p>
          <ul>
            <li>Kigali</li>
            <li>Rubavu</li>
            <li>Musanze</li>
            <li>Huye</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="flex items-center p-1 justify-center">
        <p className="text-sm">&copy; {year} Food Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
