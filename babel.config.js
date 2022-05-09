module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            api: './src/api',
            components: './src/components',
            constants: './src/constants',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
          },
        },
      ],
    ],
  }
}
