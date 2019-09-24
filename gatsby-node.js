exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-html5-camera-photo/,
            use: loaders.null(),
          },
          {
            test: /face-api.js/,
            use: loaders.null(),
          },
          {
            test: /react-qr-reader/,
            use: loaders.null(),
          },
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
