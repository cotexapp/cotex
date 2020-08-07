module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/variable.scss";`,
			},
		},
	},
	chainWebpack: config => {
		config.plugin("html").tap(args => {
			args[0].title = "CoTeX";
			return args;
		});
	},
};
