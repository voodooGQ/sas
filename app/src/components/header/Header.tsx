import React, { useContext } from "react";
import { ActiveNavigationContext } from "../../context/ActiveNavigationContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Header.scss";
import me from "./me.jpeg";

const Header: React.FC = (): JSX.Element => {
  const { active } = useContext(ActiveNavigationContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Menu
      stackable
      inverted={theme === "dark"}
      widths={6}
      size="huge"
      className={`site ${theme}`}
    >
      <Menu.Item as={Link} name="blog" to="/">
        <img src={me} alt="Shane Allen Smith" style={{ borderRadius: "50%" }} />
      </Menu.Item>

      <Menu.Item as={Link} name="blog" active={active === "blog"} to="/">
        Blog
      </Menu.Item>

      <Menu.Item
        as={Link}
        name="experience"
        active={active === "experience"}
        to="/experience"
      >
        Experience
      </Menu.Item>

      <Menu.Item
        as={Link}
        name="training"
        active={active === "training"}
        to="/training"
      >
        Training
      </Menu.Item>

      <Menu.Item
        as={Link}
        name="volunteer"
        active={active === "volunteer"}
        to="/volunteer"
      >
        Volunteer
      </Menu.Item>
      <Menu.Item
        name="resume"
        onClick={() => {
          window.location.href = "/resume/shaneallensmith.pdf";
        }}
      >
        Resume
      </Menu.Item>
    </Menu>
  );
};

export default Header;
