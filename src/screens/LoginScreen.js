import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity, Alert, Animated } from "react-native";

import OnboardingLogo from "../common/OnboardingLogo";
import LoginButton from "../common/LoginButton";
import { FacebookApi } from "../api/Facebook";

const BoxAnimated = Animated.createAnimatedComponent(Box);

class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.parallel([this.opacityAnimation(), this.positionAnimation()]);
  }

  opacityAnimation = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 100
    }).start();
  };

  positionAnimation = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  onGooglePress = () => {
    Alert.alert("Google Pressed");
  };

  onFacebookPress = async () => {
    try {
      const token = await FacebookApi.loginAsync();
      console.log("token", token);
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    const { opacity } = this.state;

    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [145, 0]
    });

    return (
      <Box f={1} center bg="white">
        <BoxAnimated
          f={1}
          w="100%"
          style={{ transform: [{ translateY: logoTranslate }] }}
        >
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </BoxAnimated>
        <BoxAnimated f={0.9} w="100%" style={{ opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButton>
        </BoxAnimated>
      </Box>
    );
  }
}

export default LoginScreen;
