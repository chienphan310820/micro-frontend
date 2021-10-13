const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5300/",
    uniqueName: "msb-gn"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "msb-gn",
      library: { type: "var", name: "msb-gn" },
      filename: "remoteEntry.js",
      exposes: {
        './msb_gnModule': './projects/msb-gn/src/app/msb-gn/msb-gn.module.ts',
      },

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
