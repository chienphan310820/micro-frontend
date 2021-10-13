const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5400/",
    uniqueName: "msb-st"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "msb-st",
      library: { type: "var", name: "msb-st" },
      filename: "remoteEntry.js",
      exposes: {
        './msb_stModule': './projects/msb-st/src/app/msb-st/msb-st.module.ts',
      },

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
