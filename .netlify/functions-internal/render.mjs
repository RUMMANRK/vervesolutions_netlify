import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","burger-menu-svgrepo-com.svg","code-1115-svgrepo-com.svg","code-alt-svgrepo-com.svg","development-svgrepo-com.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","hburger.svg","hero.svg","programming-svgrepo-com.svg","site.webmanifest","verve-logo.svg","verve-notext.svg","website-click-svgrepo-com.svg","website-cloud-storage-svgrepo-com.svg","website-program-svgrepo-com.svg","website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.2ae914d3.js","app":"_app/immutable/entry/app.dba69150.js","imports":["_app/immutable/entry/start.2ae914d3.js","_app/immutable/chunks/index.b18ef51e.js","_app/immutable/chunks/singletons.cfcd0aea.js","_app/immutable/entry/app.dba69150.js","_app/immutable/chunks/index.b18ef51e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
