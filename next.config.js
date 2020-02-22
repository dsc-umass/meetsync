/* next.config.js */

const webpack = require("webpack");
// Initialize doteenv library
console.log("NODE_ENV: " + process.env.NODE_ENV);
switch(process.env.NODE_ENV) {
  case 'development':
    require('dotenv').config({
      path: `${__dirname}/dev.env`
    })
    break
  case 'production':
    require('dotenv').config({
      path: `${__dirname}/prod.env`
    })
    break
}

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
		apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
	}
}));