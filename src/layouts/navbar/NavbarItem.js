import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import styles from "./NavbarItem.module.css";

const NavbarItem = () => {
  return (
    <>
      <ul className={styles.container}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            <FaBed />
            <p>Stays</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/flights"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaPlane />
            <p>Flights</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/car_rentals"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaCar />
            <p>Car rentals</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/attractions"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaBed />
            <p>Attractions</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/airport_taxi"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <FaTaxi />
            <p>Airport taxi</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavbarItem;
