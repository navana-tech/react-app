import type { Plugin, UserConfigExport } from "vite";

declare const viteConfig = (
	manualChunks?: { [k: string]: string[] },
	plugins?: Plugin[],
) => UserConfigExport;

export = viteConfig;
