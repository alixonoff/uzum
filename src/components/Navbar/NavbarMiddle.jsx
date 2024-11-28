import navbarLogo from "../../assets/Link → SVG@2x.png";
import { CiSearch } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { CiUser, CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import "./Navbar.css";
const NavbarMiddle = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-category-logo">
            <a className="navbar-logo-link" href="">
              <img className="navbar-logo" src={navbarLogo} alt="" />
            </a>
            <button className="navbar-category-btn">
              <TbCategory />
              <span>Katalog</span>
            </button>
          </div>

          <div className="navbar-search">
            <input type="text" placeholder="Mahsulotlar va turkumlar izlash" />
            <button>
              <CiSearch />
            </button>
          </div>

          <div className="navbar-collection">
            <a className="navbar-collection-item" href="">
              <CiUser />
              <span>Kirish</span>
            </a>

            <a className="navbar-collection-item" href="">
              <CiHeart />
              <span>Saralangan</span>
            </a>

            <a className="navbar-collection-item" href="">
              <SlBasket />
              <span>Savat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
