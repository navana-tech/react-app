// @ts-check

const { defineConfig } = require("vite");
const { default: react } = require("@vitejs/plugin-react");
const { default: svgr } = require("vite-plugin-svgr");

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
			react(),
			svgr(),
			...plugins.filter(plugin => plugin.enforce !== "pre"),
		],
	});

module.exports = viteConfig;
