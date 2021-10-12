const { defineConfig } = require("vite");
const reactRefresh = require("@vitejs/plugin-react-refresh");
const svgr = require("vite-plugin-svgr");

/**
 * @param {{ [k: string]: string[] }} manualChunks
 * @param {import("vite").Plugin[]} plugins
 */
const viteConfig = (manualChunks = {}, plugins = []) =>
	defineConfig({
		build: {
			outDir: "build",
			rollupOptions: {
				output: { manualChunks },
			},
		},
		plugins: [
			...plugins.filter(plugin => plugin.enforce === "pre"),
			reactRefresh(),
			svgr(),
			...plugins.filter(plugin => plugin.enforce !== "pre"),
		],
	});

module.exports = viteConfig;
