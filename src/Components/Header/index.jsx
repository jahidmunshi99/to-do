import { IoMdLogIn, IoMdNotifications } from "react-icons/io";
import Logo from "../../assets/ph-logo-en.png";

const Header = () => {
  return (
    <nav className="py-4 md:py-4 fixed top-0 w-full !bg-[#252a34] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* Logo */}
        <div>
          <a href="/">
            <img className="h-[45px]" src={Logo} alt="Lws" />
          </a>
        </div>
        {/* Menu */}
        <ul className="flex justify-between gap-4 items-center">
          {/* Notification */}
          <li className="relative">
            <a href="">
              <IoMdNotifications className="text-2xl hover:text-[#00D991] transition" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </a>
          </li>

          <li>
            <a href="">
              <IoMdLogIn className="text-2xl hover:text-[#00D991] transition" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
