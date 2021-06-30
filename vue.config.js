module.exports = {
  pwa: {
    name: "فروشگاه اینترنتی دیجی کالا",
    themeColor: "#401887",
    msTileColor: "#aaaaaa",
    appleMobileWebAppCapable: "no",
    appleMobileWebAppStatusBarStyle: "default",
    assetsVersion: "",
    manifestPath: "manifest.json",
    manifestCrossorigin: undefined,
    manifestOptions: {
      background_color: "#eeeeee",
      icons: [
        {
          src: "img/myicon/logo5_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "img/myicon/logo5_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "img/myicon/logo5_192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "img/myicon/logo5_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    iconPaths: {
      favicon32: "img/myicon/logo5_32x32.png",
      favicon16: "img/myicon/logo5_16x16.png",
      // appleTouchIcon: "img/myicon/logo5_152x152.png",
      // maskIcon: "img/icons/safari-pinned-tab.svg",
      // msTileImage: "img/myicon/logo5_144x144.png",
    },
  },
};
