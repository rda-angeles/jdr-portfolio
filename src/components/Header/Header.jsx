import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import Logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { id: 1, navLink: "Home", path: "#hero" },
    { id: 2, navLink: "About", path: "#about" },
    { id: 4, navLink: "Skills", path: "#skills" },
    { id: 5, navLink: "Projects", path: "#projects" },
    { id: 6, navLink: "Contact", path: "#contacts" },
  ];

  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("transparent");
  // const [navFix, setNavFix] = useState("inherit");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavColor("#000");
      // setNavFix("fixed");
    } else {
      setNavColor(navColor);
      // setNavFix(navFix);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-4 z-30 header "
      style={{
        backgroundColor: navColor,
        transition: "all .3s",
        position: "fixed",
        color: "white",
      }}
    >
      {/* Medium to Larger Device */}

      <div className="flex justify-end items-center w-full mx-auto container">
        {/* Logo/Name */}
        {/* <div className="logo h-[100%] cursor-pointer max-w-[7rem] ">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="RDA Logo"
              className="header-logo"
              style={{
                filter: "invert(1)",
              }}
            />
          </Link>
        </div> */}
        {/* Links */}
        <ul className="nav-links hidden md:flex">
          {navLinks.map(({ id, navLink, path }) => (
            <a key={id} className="px-4 text-sm cursor-pointer" href={path}>
              {navLink}
            </a>
          ))}
        </ul>
      </div>

      {/* Mobile menu -- Smaller Device */}
      <div
        className="mobile-menu cursor-pointer z-20 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <CloseIcon
            size={25}
            style={{
              color: nav ? "white" : "black",
            }}
          />
        ) : (
          <MenuIcon size={25} />
        )}
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-primary flex justify-center items-center flex-col menu-link z-10 text-white">
          {navLinks.map(({ id, navLink, path }) => (
            <a
              key={id}
              className="py-6 capitalize cursor-pointer text-3xl"
              href={path}
              onClick={() => setNav(!nav)}
            >
              {navLink}
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
