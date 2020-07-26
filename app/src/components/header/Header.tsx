import React, { useContext } from "react";
import { ActiveNavigationContext } from "../../context/ActiveNavigationContext";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Header.scss";
import me from "./me.jpeg";

interface Props {}

const Header: React.FC<Props> = (props): JSX.Element => {
  const { active, toggleActive } = useContext(ActiveNavigationContext);

  return (
    <Menu stackable inverted widths={6} pointing size="huge" className="site">
      <Menu.Item as={Link} name="blog" to="/">
        <img src={me} alt="Shane Allen Smith" style={{ borderRadius: "50%" }} />
      </Menu.Item>

      <Menu.Item
        as={Link}
        name="blog"
        active={active === "blog"}
        onClick={() => {
          toggleActive("blog");
        }}
        to="/"
      >
        Blog
      </Menu.Item>

      <Menu.Item
        as={Link}
        name="experience"
        active={active === "experience"}
        onClick={() => {
          toggleActive("experience");
        }}
        to="/experience"
      >
        Experience
      </Menu.Item>

      <Menu.Item
        as={Link}
        name="training"
        active={active === "training"}
        onClick={() => {
          toggleActive("training");
        }}
        to="/training"
      >
        Training
      </Menu.Item>

      <Menu.Item
        as={Link}
        name="volunteer"
        active={active === "volunteer"}
        onClick={() => {
          toggleActive("volunteer");
        }}
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
