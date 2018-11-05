import React from "react";
import { Box, Text, Heading, Image, Button } from "gestalt";
import { getToken, clearToken, clearCart } from "../utils/index";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  handleSignout = () => {
    // clear token
    clearToken();
    // clear cart
    clearCart();
    // redirect home
    this.props.history.push("/");
  };

  render() {
    return getToken() !== null ? (
      <AuthNav handleSignout={this.handleSignout} />
    ) : (
      <UnAuthNav />
    );
  }
}

const AuthNav = ({ handleSignout }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Checkout Link */}
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white">
        Checkout
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        {/* Title */}
        <div className="main-title">
          <Heading size="xs" color="orange">
            BrewHaha
          </Heading>
        </div>
      </Box>
    </NavLink>
    {/* Sign out Link */}
    <Button
      onClick={handleSignout}
      inline
      color="transparent"
      text="Sign Out"
      size="md"
    />
  </Box>
);

const UnAuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Sign in Link */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        {/* Title */}
        <div className="main-title">
          <Heading size="xs" color="orange">
            BrewHaha
          </Heading>
        </div>
      </Box>
    </NavLink>

    {/* Sign up Link */}
    <NavLink activeClassName="active" to="/signup">
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default withRouter(Navbar);
