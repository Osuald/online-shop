import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className="flex justify-between items-center gap-4 border-t px-16 mt-10 lg:px-120 py-6  text-white">
      <div className="flex justify-center items-center p-4">
        <p className="text-lg font-semibold">
          &copy; {year} Food Shop. All rights reserved.
        </p>
      </div>
      <div className="text-lg">
        <p className="font-bold ">Quick Links</p>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
    </footer>
  );
}
