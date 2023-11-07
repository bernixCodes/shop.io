import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <h2>
              All <span>Needs.</span>
            </h2>
          </Link>
        </div>

        <nav>
          <div className={styles["header-right"]}>
            <span className="styles.links">
              <NavLink
                to={"/login"}
                className={(styles.activeLink, styles.navLink)}
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className={(styles.activeLink, styles.navLink)}
              >
                Register
              </NavLink>
            </span>
            <span className={styles.cart}>
              <Link to={"/cart"}>
                Cart
                <AiOutlineShoppingCart size={20} />
                <p className={styles["cart-count"]}>0</p>
              </Link>
            </span>
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          <span className={styles.cart}>
            <Link to={"/cart"}>
              Cart
              <AiOutlineShoppingCart size={20} />
              <p className={styles["cart-count"]}>0</p>
            </Link>
          </span>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
