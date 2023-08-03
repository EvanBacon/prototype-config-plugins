const {
  default: withAppleSettings,
  TextField,
  Switch,
  Slider,
  ChildPane,
  Group,
} = require("@config-plugins/apple-settings");

module.exports = (config) => {
  return withAppleSettings(config, {
    // The name of the .plist file to generate. Root is the default and must be provided.
    Root: {
      // The locales object is optional. If provided, it will be used to generate the localized .strings files.
      locales: {
        // The Apple locale code. This will be used to generate the .strings file.
        en: {
          // Name of the localized key.
          Name: "Text Field",
        },
      },
      // The page object is required. It will be used to generate the .plist file.
      // The contents will be converted directly to plist.
      page: {
        // The `PreferenceSpecifiers` defines the UI elements to generate.
        PreferenceSpecifiers: [
          // Helper models can be used to generate the UI elements using a syntax that's
          // similar to React Native.
          TextField({
            title: "Name",
            key: "name_preference",
            value: "",
            keyboardType: "Alphabet",
            autoCapitalize: "None",
            autoCorrect: "No",
          }),
          Switch({
            title: "Enabled",
            key: "enabled_preference",
            value: true,
          }),
          Slider({
            key: "slider_preference",
            value: 0.5,
          }),
          // Child panes can be used to create nested pages.
          ChildPane({
            title: "About",
          }),
        ],
      },
    },
    About: {
      page: {
        PreferenceSpecifiers: [
          Group({
            title: "About Info",
          }),
        ],
      },
    },
  });
};
