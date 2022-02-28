import path from "node:path";
import url from "node:url";

import { defineConfig, loadEnv } from "vite";

const envDir = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  // __dirname,
  "./config"
);

export default defineConfig((config) => {
  console.log("mode", config.mode);
  console.log("envDir", envDir);

  // are the .env files able to be loaded?
  const loadedEnv = loadEnv(config.mode, envDir);
  console.log(loadedEnv);

  return {
    define: {
      __IS_LOCAL__: JSON.stringify(config.command === "serve")
    },

    envDir
  };
});
