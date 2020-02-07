/* next.config.js */

const webpack = require("webpack");
// Initialize doteenv library
require("dotenv").config();

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
  module: {
		rules: [
			{
				test: /\.md$/i,
				use: "raw-loader"
			}
		]
	},
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    /**
     * Returns environment variables as an object
     */
    const env = Object.keys(process.env).reduce((acc, curr) => {
             acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
             return acc;
   }, {});

    /** Allows you to create global constants which can be configured
    * at compile time, which in our case is our environment variables
    */
    config.plugins.push(new webpack.DefinePlugin(env));
    return config
  }
}));


/*

//module.exports.withSass = withSass();
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
  module: {
		rules: [
			{
				test: /\.md$/i,
				use: "raw-loader"
			}
		]
	},	
	env: {
		apiKey: "AIzaSyC7amFtuaMpAKj5Xl1dALAMpBE2OR4HKAY",
		authDomain: "tim-meetsync.firebaseapp.com",
		databaseURL: "https://tim-meetsync.firebaseio.com",
		projectId: "tim-meetsync",
		storageBucket: "tim-meetsync.appspot.com",
		messagingSenderId: "916671339676",
		appId: "1:916671339676:web:5d43837605d5b67fd7a159",
		measurementId: "G-V6HBTK5WFC"
	}
}));
*/