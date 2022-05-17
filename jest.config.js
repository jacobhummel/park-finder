module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      branches: 20, // TODO: set to 70%+
    },
  },
};
