interface Hotkey {
  key: string;
  description: string;
}

export const ToggleColorScheme: Hotkey = {
  key: "mod+J",
  description: "Toggles the current color scheme between light and dark.",
};
