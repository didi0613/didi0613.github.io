module.exports = {
  cache: {
    cacheId: "electrode-digest",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-digest",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
