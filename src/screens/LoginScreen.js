import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity, Alert, Animated } from "react-native";

import OnboardingLogo from "../common/OnboardingLogo";
import LoginButton from "../common/LoginButton";

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

  onFacebookPress = () => {
    Alert.alert("Facebook Pressed");
  };

  render() {
    const { opacity } = this.state;

    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [145, 0]
    });

    return (
      <Box f={1} center bg="white">
        <Animated.View
          style={{ flex: 1, transform: [{ translateY: logoTranslate }] }}
        >
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </Animated.View>
        <Animated.View style={{ flex: 0.9, width: "100%", opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButton>
        </Animated.View>
      </Box>
    );
  }
}

export default LoginScreen;
