export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","burger-menu-svgrepo-com.svg","code-1115-svgrepo-com.svg","code-alt-svgrepo-com.svg","development-svgrepo-com.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","hburger.svg","hero.svg","programming-svgrepo-com.svg","site.webmanifest","verve-logo.svg","verve-notext.svg","website-click-svgrepo-com.svg","website-cloud-storage-svgrepo-com.svg","website-program-svgrepo-com.svg","website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.bcacd5af.js","app":"_app/immutable/entry/app.ceb88996.js","imports":["_app/immutable/entry/start.bcacd5af.js","_app/immutable/chunks/index.807e87c7.js","_app/immutable/chunks/singletons.bf5153d7.js","_app/immutable/entry/app.ceb88996.js","_app/immutable/chunks/index.807e87c7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
