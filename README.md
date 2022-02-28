# repro-vite-env-prefix
Created with CodeSandbox

## original problem

when trying to introduce [env vars](https://vitejs.dev/guide/env-and-mode.html#env-files) to a project, everything was working great while serving locallly but builds were failing:

<details>
<summary>
`npm run build` output
</summary>

```sh
❯ npm run build

> vanilla-typescript@1.0.0 build
> vite build

mode production
envDir /Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/config
{ VITE_APP_TITLE: 'My App (production)' }
vite v2.8.4 building for production...
✓ 4 modules transformed.
[rollup-plugin-dynamic-import-variables] Unexpected token (7:20)
file: /Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/src/config.env.ts:7:20
error during build:
SyntaxError: Unexpected token (7:20)
    at Parser.pp$4.raise (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:19607:13)
    at Parser.pp$9.unexpected (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:16903:8)
    at Parser.pp$9.expect (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:16897:26)
    at Parser.pp$5.parseExprList (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:19474:12)
    at Parser.pp$5.parseNew (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:19155:57)
    at Parser.pp$5.parseExprAtom (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:18969:17)
    at Parser.pp$5.parseExprSubscripts (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:18774:19)
    at Parser.pp$5.parseMaybeUnary (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:18740:17)
    at Parser.pp$5.parseExprOps (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:18667:19)
    at Parser.pp$5.parseMaybeConditional (/Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/node_modules/rollup/dist/shared/rollup.js:18650:19)
```

</details>

## solution

it appears the error stems from trying to reference the full name of the environment variable in the error message:

```diff
- throw new Error('import.meta.env.VITE_APP_TITLE is undefined')
+ throw new Error('VITE_APP_TITLE is undefined')
```

`npm run build` now succeeds:

```sh
❯ npm run build

> vanilla-typescript@1.0.0 build
> vite build

mode production
envDir /Users/mbeatty/Development/src/github.com/maxbeatty/repro-vite-env-prefix/config
{ VITE_APP_TITLE: 'My App (production)' }
vite v2.8.4 building for production...
✓ 5 modules transformed.
dist/index.html                 0.22 KiB
dist/assets/index.2dd1a8c1.js   1.16 KiB / gzip: 0.60 KiB
```

and we can verify that our production value was inlined:

```sh
❯ grep -q production dist/assets/index.2dd1a8c1.js && echo "found" || echo "not found"
found
```
