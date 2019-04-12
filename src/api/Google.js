import { Google, Constants } from "expo";

const scopes = ["profile", "email"];

const loginAsync = async () => {
  try {
    const result = await Google.loginAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
      iosClientId: Constants.manifest.extra.googleAppId.ios,
      scopes,
    });

    if (result.type === "success") {
      return Promise.resolve(result.accessToken);
    }
    return Promise.reject("No Success!");
  } catch (error) {}
};

export const GoogleApi = { loginAsync };
