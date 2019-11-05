const withSass = require("@zeit/next-sass");
module.exports.withSass = withSass();

module.exports = withSass({
	module: {
		rules: [
			{
				test: /\.md$/i,
				use: "raw-loader"
			}
		]
	}
});
