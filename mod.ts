/**
 * os-constants provides constant values for basic os information
 * such as `PLATFORM`, `ARCH`, `WINDOWS`, `DARWIN`, `PATH_SEP`, `DEV_NULL`
 *
 * ## Basic Usage
 *
 * ```typescript
 * import * as os from "@gnome/os-constants";
 *
 * console.log(os.PLATFORM);
 * console.log(os.ARCH);
 * console.log("windows", os.WINDOWS);
 * console.log("darwin", os.DARWIN);
 * console.log("linux", os.LINUX);
 * console.log("eol", os.EOL);
 * console.log("path separator", os.PATH_SEP);
 * ```
 * @module
 */
import type { Env, EnvPath } from "./types.ts";

// deno-lint-ignore no-explicit-any
const g = globalThis as any;
let env: Env;

if (g.process) {
    env = (await import("./env.node.ts")).env;
} else if (g.Deno) {
    env = (await import("./env.deno.ts")).env;
} else {
    env = (await import("./env.browser.ts")).env;
}

export { type Env, env, type EnvPath };
