module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            api: "./src/api",
            components: "./src/components",
            constants: "./src/constants",
            context: "./src/context",
            hooks: "./src/hooks",
            navigation: "./src/navigation",
            screens: "./src/screens",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
