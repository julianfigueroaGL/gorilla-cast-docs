## Introduction

When our application starts to grow in size and complexity, state management using _props_ and _emit_-ing events tend to fall behind, codebase becomes more harder to mantain and bugs are more likely to happen. That's when a more robust state management pattern helps a lot reducing complexity, preventing bugs and making the codebase easier to mantain.

`Vuex` is the officially supported Flux implementation for Vuejs Applications. Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

## Installation

Vuejs recommends for most Single Page Applications implementing a centralized state store the officially supported [vuex library.](https://github.com/vuejs/vuex)

### Using CDN

You could use simple script tags in order to load `vuex` from a CDN link.
Include vue-router after Vue and it will install itself automatically:

```HTML
<script src="/path/to/vue.js"></script>
<script src="https://unpkg.com/vuex"></script>
```

### Using Npm / Yarn

```sh
npm install vuex --save

//or

yarn add vuex
```

When used with a module system, you must explicitly install Vuex via Vue.use():

```javascript
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
```

You don't need to do this when using global script tags.

## How Vuex Works

At the center of every Vuex application is the **store**. A "store" is basically a container that holds your application **state**. There are two things that make a Vuex store different from a plain global object:

<img :src="$withBase('/vuex-workflow.png')" alt="Vuex Diagram">

1. Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.

2. You cannot directly mutate the store's state. The only way to change a store's state is by explicitly **committing mutations**. This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.

## The Basics

### State

### Getters
### Mutations
### Actions
### Modules



### The Simplest Store - Counter Example

After [installing Vuex](/stores/vuex/vuex.html#installation), let's create a store. It is pretty straightforward - just provide an initial state object, and some mutations:

```javascript
// main.js
import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
```

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <h5>The simplest counter</h5>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>
```

As you can see, now we are able to access the state object as `store.state`, and trigger a state change with the `store.commit` method:

Again, the reason we are committing a mutation instead of changing `store.state.count` directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.

Using store state in a component simply involves returning the state within a computed property, because the store state is reactive. Triggering changes simply means committing mutations in component methods.

Here's the complete example:

<iframe
     src="https://codesandbox.io/embed/elegant-bogdan-e92qy?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="elegant-bogdan-e92qy"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

## Examples

Data modeling is the process of creating a data model

> A data model is the process of design a data base structure that organizes elements of data.

## Additional Links
