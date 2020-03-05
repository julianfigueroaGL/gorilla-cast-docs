# Application Setup

## Plugins Usage

### Definition

As in many other frameworks and even in general in programming languages, plugins are pre-built libraries that add extra functionality to our application. In Vue, there's no difference, plugins add extra funcionality to our Vue.js appliction in a global scope.

As per the official documentation, we could split plugins basned on the following main purposes:

- To add global methods or properties.
- To add global assets.
- To add global options through global mixins.
- To add global methods attached to Vue prototype.

However, there are plugins that could include all of the purposes mentioned above.

### Installing Plugins

In order to implement a plugin in your Vue application, you should:

- Install the desired plugin if required, for example using npm or yarn.
- Include the plugin in your Vue instance, taking advantage of the ``` Vue.use ``` command as shown below

```javascript
// Create Vue Instance
var Vue = require('vue')
// Create Plugin Instance
var VueRouter = require('vue-router')
// Use/Implement plugin
Vue.use(VueRouter)
```

## Suggested Folder Structure

When it comes to folders structure, there are multiple proposals and open discussions about the definitive answer. There's not something such as a ideal folders structure, that's why the recommendation is to always think about the project's needs and then make your folders structure meet those needs.

However, Vue CLI offers a really good skeleton of folder structure, and it's the one we suggest as an initial start point:

```
.
├── README.md
├── babel.config.js
├── jest.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── api
│   ├── app
│   ├── assets
│   ├── components
│   ├── main.js
│   ├── plugins
│   ├── router
│   ├── store
│   ├── utils
│   └── views
├── tests
│   └── unit
└── vue.config.js
```

## Vue-CLI

## Additional Links

- [Vuejs.org](https://vuejs.org/v2/guide/plugins.html#ad) Learn more about plugins and how to create your owns
