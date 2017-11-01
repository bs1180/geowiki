import React from "react";
import styled from "react-emotion";
import { space, fontSize, width, color, borderColor, responsiveStyle } from "styled-system";
import { Flex, Box } from "grid-emotion";
import { Menu } from './Icons'
import { withProps } from 'recompose'

const Badge = styled("div")`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 20px;
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
  cssProperty: "display"}
);
const direction = responsiveStyle("");

const NavLink = styled("a")`
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  ${space} ${fontSize} ${width} ${color} ${borderColor} &:after {
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
`;

const Navbar = styled(Flex)`background: #91785d;`;

const MenuButton = withProps({
  display: ['block', 'none'],
  as: 'button'
})(styled(Box)`
  ${display}
`)

const Wrapper = withProps({ display: ['none', 'flex'] })(styled(Flex)`
  ${display}
`)

export default class extends React.Component {

  state = {
    open: false
  }

  toggleOpen () {
    this.setState(state => { open: !!state.open })
  }

  render() {
    const { links = [] } = this.props;

    return (
      <Navbar>
        <Badge>
          <img src="/static/logo2.jpg" width="100px" />
        </Badge>
        <span css={`flex: 1 1 auto`} />
        <Wrapper id="wrapper">
          {links.map(l => (
            <NavLink key={l.name} href="#" mx={2} my={2}>
              {l.name}
            </NavLink>
          ))}
        </Wrapper>
        <MenuButton onClick={this.toggleOpen}>
          <Menu />
        </MenuButton>
      </Navbar>
    );
  }
}
