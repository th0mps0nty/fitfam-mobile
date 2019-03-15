import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";

import OnboardingLogo from "../common/OnboardingLogo";
import LoginButton from "../common/LoginButton";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <Box f={1} center bg="white">
        <Box f={1} center>
          <OnboardingLogo />
        </Box>
        <Box f={0.9} w="100%">
          <LoginButton type="google">Continue with Google</LoginButton>
          <LoginButton type="facebook">Continue with Facebook</LoginButton>
        </Box>
      </Box>
    );
  }
}

export default LoginScreen;
