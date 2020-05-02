import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, MenuItemProps } from "semantic-ui-react";
import { setActiveNavItem } from "../../redux/actions/ui";
import { HeaderState } from "../../redux/types";
import me from "./me.jpeg";

interface Props {
  header: HeaderState;
  setActiveNavItem: (navItem: string) => Promise<void>;
}

class Header extends React.Component<Props> {
  public handleItemClick = (_event: any, data: MenuItemProps): void => {
    if (data.name) {
      this.props.setActiveNavItem(data.name);
    }
  };

  public render(): JSX.Element {
    return (
      <Menu stackable inverted widths={6}>
        <Menu.Item>
          <img
            src={me}
            alt="Shane Allen Smith"
            style={{ borderRadius: "50%" }}
          />
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="home"
          active={this.props.header.active === "home"}
          onClick={this.handleItemClick}
          to="/"
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="experience"
          active={this.props.header.active === "experience"}
          onClick={this.handleItemClick}
          to="/experience"
        >
          Experience
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="training"
          active={this.props.header.active === "training"}
          onClick={this.handleItemClick}
          to="/"
        >
          Training
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="volunteer"
          active={this.props.header.active === "volunteer"}
          onClick={this.handleItemClick}
          to="/"
        >
          Volunteer
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="blog"
          active={this.props.header.active === "blog"}
          onClick={this.handleItemClick}
          to="/"
        >
          Blog
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state: { header: HeaderState }) => {
  return { header: state.header };
};

export default connect(mapStateToProps, { setActiveNavItem })(Header);
