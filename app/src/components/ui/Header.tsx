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
      <Menu stackable inverted>
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
          to="/home"
        >
          Home
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state: { header: HeaderState }) => {
  return { header: state.header };
};

export default connect(mapStateToProps, { setActiveNavItem })(Header);
