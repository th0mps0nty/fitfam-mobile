import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-ionicons";

import OnboardingLogo from "../common/OnboardingLogo";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <Box f={1} center bg="white">
        <Box f={1} center>
          <OnboardingLogo />
        </Box>
        <Box f={0.9} w="100%">
          <TouchableOpacity>
            <Box
              align="center"
              dir="row"
              shadow={1}
              bg="green"
              w="80%"
              self="center"
              p="2xs"
              radius="xs"
            >
              <Box mr="sm">
                <Box bg="white" h={32} w={32} radius="xs" center>
                  <Icon name="add" />
                </Box>
              </Box>
              <Box />
              <Text size="md" color="white">
                Continue With Google
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    );
  }
}

export default LoginScreen;
