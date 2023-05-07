export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","hburger.svg","hero.svg","verve-logo.svg","verve-notext.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.66e43cc6.js","app":"_app/immutable/entry/app.37294e78.js","imports":["_app/immutable/entry/start.66e43cc6.js","_app/immutable/chunks/index.807e87c7.js","_app/immutable/chunks/singletons.66f77781.js","_app/immutable/entry/app.37294e78.js","_app/immutable/chunks/index.807e87c7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
