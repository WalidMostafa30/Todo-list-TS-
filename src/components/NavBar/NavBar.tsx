import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAppSelector } from "../../store/store";

const NavBar = () => {
  const { todos, inprogress, finished } = useAppSelector((state) => state.todo);

  const navLinks = [
    { title: "Todo", link: "/", length: todos.length },
    { title: "Inprogress", link: "/inprogress", length: inprogress.length },
    { title: "Finished", link: "/finished", length: finished.length },
  ];

  return (
    <nav className="NavBar flex gap-4">
      {navLinks.map((navLink) => (
        <NavLink key={navLink.link} className="nav-link" to={navLink.link}>
          {navLink.title}
          {navLink.length > 0 && (
            <span className="nav-link-span">{navLink.length}</span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
