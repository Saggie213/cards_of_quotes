import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <Link to="/" className="text-2xl font-extrabold tracking-wide">📜 QuoteWorld</Link>
        <ul className="flex gap-6 text-lg">
            <li className="hover:underline cursor-pointer">Quotes</li>
            <li className="hover:underline cursor-pointer">Authors</li>
        </ul>
    </nav>
);

export default Navbar;
