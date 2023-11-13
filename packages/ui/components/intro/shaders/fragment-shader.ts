export const fragmentShader = `
uniform bool uIsDarkMode;

void main() {
  vec4 lightColor = vec4(0.2, 0.2, 0.2, 1.0);
  vec4 darkColor = vec4(0.8, 0.8, 0.8, 1.0);

  gl_FragColor = uIsDarkMode ? darkColor : lightColor;
}
`;
