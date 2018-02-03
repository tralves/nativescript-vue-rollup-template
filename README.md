# DEPRECATED

We are deprecating this template in favor of the [webpack one](https://github.com/tralves/nativescript-vue-webpack-template). Some things may have changed and I haven't tested this template in a while.

Check the [Groceries Vue app](https://github.com/tralves/groceries-ns-vue) for an example of a working app using the webpack template.

# NativeScript Vue.js Template

This repo serves as the starting point for NativeScript + Vue.js projects, using [nativescript-vue](https://github.com/rigor789/nativescript-vue).

This template creates a project ready to use with Vue single file components\* (`.vue` files)!

It creates a project with the structure:
```
my-app
 |
 |-app   # your app code
 |  |-components
 |  |-...
 |
 |-tns   # the generated tns project
 |  |-app
 |  |-...
 |...
```

This template supports:

- .vue Single-File Components;
- scss imports and inside `<style>` tags in .vue files;
- root imports (imports starting with `/` refer to the root of the `app` folder);
- babel with `es2015` and `stage-2` presets;

## Usage

1. Dependencies:
- Install NativeScript tools (see http://docs.nativescript.org/start/quick-setup)
- Install rollup globally (`npm install --global rollup`) -OR- add `./node_modules/.bin` to the `PATH`.

2. Create app from this template
```bash
tns create hello-ns-vue --template nativescript-vue-rollup-template

cd hello-ns-vue
```

3. Watch for changes while developing

In two separate terminals run:
```
# terminal 1
rollup -c -w

# terminal 2
cd tns
tns run android
# or
tns run ios
```

4. Code!
Check [Groceries Vue](https://github.com/tralves/groceries-ns-vue) to see this template
in action in a complete app.
