import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLocationDot,
  faSearch,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-3 py-2">
      {/* NAVBAR */}
      <div className="flex items-center justify-between gap-2">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 min-w-0">

          <FontAwesomeIcon
            icon={faBars}
            className="text-xl cursor-pointer flex-shrink-0"
            onClick={() => setMenuOpen(true)}
          />

          <img
            src="/Logo/logo-pink.png"
            alt="KaiTea"
            className="w-10 h-10 rounded-lg flex-shrink-0 "
          />

          {/* LOCATION INPUT */}
          <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full min-w-0">

            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-sm flex-shrink-0 text-gray-600"
            />

            <input
              type="text"
              placeholder="Address"
              className="bg-transparent outline-none text-sm w-full min-w-100 py-2 text-lg"
            />

          </div>

        </div>

        {/* CART */}
        <button className="bg-pink-500 text-white p-2 rounded-lg flex-shrink-0">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>

      </div>

      {/* DARK OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* DRAWER MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 rounded-r-2xl bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-bold text-lg">Menu</h2>

          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer text-xl"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col p-4 gap-4 font-semibold">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">Cakes</li>
          <li className="hover:text-pink-500 cursor-pointer">Scones</li>
          <li className="hover:text-pink-500 cursor-pointer">Specials</li>
          <li className="hover:text-pink-500 cursor-pointer">My Orders</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* SEARCH */}
      <div className="p-2">
        <div className="flex bg-gray-300 p-2 rounded-2xl gap-2 items-center">
          <FontAwesomeIcon icon={faSearch} />

          <input
            type="search"
            placeholder="Try Our Delicious Cakes"
            className="bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}

export default Menu;
