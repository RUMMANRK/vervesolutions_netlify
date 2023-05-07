export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","hburger.svg","hero.svg","site.webmanifest","verve-logo.svg","verve-notext.svg"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.bf5bcd25.js","app":"_app/immutable/entry/app.0ee1a817.js","imports":["_app/immutable/entry/start.bf5bcd25.js","_app/immutable/chunks/index.807e87c7.js","_app/immutable/chunks/singletons.3c1d2ec9.js","_app/immutable/entry/app.0ee1a817.js","_app/immutable/chunks/index.807e87c7.js"],"stylesheets":[],"fonts":[]},
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
