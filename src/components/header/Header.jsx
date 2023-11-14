import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useCartContext } from "../../context/useCartContext";
import { useAuthContext } from "../../context/useAuthContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cartNumber } = useCartContext();
  const { setCurrentUser, currentUser, setAuth, auth, logout } =
    useAuthContext();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken && localToken.length > 0) {
      setAuth(true);
      let user = JSON.parse(localStorage.getItem("user"));
      setCurrentUser(user);
    } else {
      setAuth(false);
    }
  }, [setCurrentUser, setAuth]);

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

        {auth && <p>{currentUser.name}</p>}
        <nav>
          <div className={styles["header-right"]}>
            {!auth && (
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
            )}

            {auth && (
              <NavLink
                to={"/login"}
                className={(styles.activeLink, styles.navLink, styles.mr)}
                onClick={logout}
              >
                Logout
              </NavLink>
            )}
            <span className={styles.cart}>
              <Link to={"/cart"}>
                Cart
                <AiOutlineShoppingCart size={20} />
                <p className={styles["cart-count"]}>{cartNumber}</p>
              </Link>
            </span>
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          <span className={styles.cart}>
            <Link to={"/cart"}>
              Cart
              <AiOutlineShoppingCart size={20} />
              <p className={styles["cart-count"]}>{cartNumber}</p>
            </Link>
          </span>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
