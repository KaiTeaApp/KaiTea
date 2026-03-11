import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUtensils,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t flex justify-around items-center py-3 z-50 md:hidden">
      <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-pink-500">
        <FontAwesomeIcon icon={faHouse} className="text-xl" />
        <span className="text-xs">Home</span>
      </div>

      <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-pink-500">
        <FontAwesomeIcon icon={faUtensils} className="text-xl" />
        <span className="text-xs">Menu</span>
      </div>

      <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-pink-500">
        <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
        <span className="text-xs">Cart</span>
      </div>

      <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-pink-500">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
        <span className="text-xs">Profile</span>
      </div>
    </div>
  );
}

export default BottomNav;
