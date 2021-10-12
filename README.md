# `@navanatech/react`

Shareable configs for Navana Tech's React setup. Includes the following:

* vite
* tsconfig
* postcss
* svgr

## How to use

```sh
# Using npm
npm install -D @navanatech/react vite typescript postcss eslint prettier

# using yarn
yarn add -D @navanatech/react vite typescript postcss eslint prettier

# using pnpm (preferred)
pnpm add @navanatech/react vite typescript postcss eslint prettier
```

Add this to your package.json:

```JSON
"scripts": {
	"start": "vite",
	"build": "vite build",
	"preview": "vite preview",
	"pretty": "pretty-quick --pattern '**/*.*(js|jsx|ts|tsx)'",
	"lint": "eslint --ext .js --ext jsx --ext .ts --ext tsx ./src"
},
"prettier": "@navanatech/react/.prettierrc.json",
"eslintConfig": {
	"extends": "react-app"
},
```

Add the following config files:

### vite.config.ts

```TypeScript
import { defineConfig } from "vite";
import viteConfig from "@navanatech/react/viteConfig";

import { dependencies } from "./package.json";

const manualChunks = {
	core: ["react", "react-router-dom"],
	other: Object.keys(dependencies).filter(key => !["react", "react-router-dom"].includes(key)),
};

export default defineConfig(viteConfig(manualChunks));
```

### tsconfig.json

```JSON
{
	"extends": "@navanatech/react/tsconfig.json",
	"compilerOptions": {
		"types": ["vite/client", "@navanatech/react"],
	},
	"include": ["./src", "./vite.config.ts"]
}
```

### postcss.config.json

```JavaScript
module.exports = require("@navanatech/react/postcss.config");
```
