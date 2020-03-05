# Progressive Web Applications - PWA

Progressive web app is a web that a native app can do, it can work offline and you can istall it from a browser.

## Features

PWAs can run on any device, they should be responsive and have an icon for a different device resolution

To build a PWA, it's needed to register [service workers](https://developers.google.com/web/fundamentals/primers/service-workers) for handling the installation process and adding the offline features to make a normal web app a PWA.

## Build a PWA with Vue JS

It's available with [Vue CLI 3.x](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa#readme)

- For an existing Vue Js application you have to run this command:

```bash
vue add pwa
```

### Getting Started

- Create a new Vue JS app with CLI

```bash
npx @vue/cli create pwa-app
```

## Additional Links

- [Official documentation](https://cli.vuejs.org/core-plugins/pwa.html)
- [NPM package](https://www.npmjs.com/package/@vue/cli-plugin-pwa)
