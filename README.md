# @gnome/env

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The env works with environment variables and the path variable and works
in deno, node, and bun.

## Basic Usage

```typescript
import { env } from "@gnome/env";

// set variable
env.set("MY_VAR", "test")
console.log(env.get("MY_VAR"))

// proxy object to allow get/set/delete similar to process.env
console.log(env.values.MY_VAR);
console.log(env.get("USER") || env.get("USERNAME"));
console.log(env.has("USER"))

// undefined will remove a value
env.merge({
    "VAR2": "VALUE",
    "MY_VAR": undefined
});

env.set("MY_VAR", "test")
env.remove("MY_VAR");

env.path.append("/opt/test/bin");
env.path.prepend("/opt/test2/bin");
env.path.has("/opt/test2/bin");
env.path.remove("/opt/test2/bin");
env.path.replace("/opt/test/bin", "/opt/test2/bin")

console.log(env.path.split()); 
console.log(env.path) // the full path string
console.log(env.path.toString()) // the full path string

const path = env.path.get()

// overwrites the environment's PATH variable
env.path.overwite(`${PATH}:/opt/test4/bin`) 

```

[MIT License](./LICENSE.md)
