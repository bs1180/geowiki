import React from "react";
import styled from "react-emotion";
import { responsiveStyle } from "styled-system";
import { Flex, Box } from "grid-emotion";
import { Menu } from "./Icons";
import { compose, withProps, defaultProps, mapProps } from "recompose";

const Badge = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -20px;
  width: 150px;
  background-color: #fff;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  height: 100px;
  z-index: 100;
  &:after {
    background: inherit;
    bottom: 0;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-10deg);
    transform-origin: 100%;
    z-index: -1;
  }
`;

const display = responsiveStyle({
  prop: "display",
  cssProperty: "display"
});

const NavLink = withProps({ is: "a", my: [2, 0] })(styled(Box)`
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`);

const Navbar = styled(Flex)`
  background: #91785d;
`;

const ConstrainedWidth = styled(Flex)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  align-items: flex-start;
`;

const MenuButton = withProps({
  display: ["block", "none"],
  is: "button"
})(styled(Box)`
  cursor: pointer;
  border: none;
  background: inherit;
  ${display};
`);

const Wrapper = styled(Flex)`${display};`;

export default class extends React.Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState(s => {
      return { open: !s.open };
    });
  };

  renderLink = ({ name, href = "#" }) => (
    <NavLink key={name} href={href} mx={2}>
      {name}
    </NavLink>
  );

  render() {
    const { links = [] } = this.props;
    const { open } = this.state;

    const x = open ? ["flex", "none"] : "none";

    return (
      <Navbar p={2}>
        <ConstrainedWidth id="con">
          <Badge>
            <img src="/static/logo2-optimised.jpg" width="100" height="100" />
          </Badge>
          <span css={`flex: 1 1 auto`} />
          <Wrapper display={["none", "flex"]}>{links.map(this.renderLink)}</Wrapper>
          <Wrapper display={x} mt={100} direction="column">
            {links.map(this.renderLink)}
          </Wrapper>
          <MenuButton onClick={this.toggleOpen}>
            <Menu />
          </MenuButton>
        </ConstrainedWidth>
      </Navbar>
    );
  }
}
