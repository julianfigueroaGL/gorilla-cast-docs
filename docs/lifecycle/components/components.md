# Components

## Definition

On the Internet, we could find a lot of good and extensive definitions about what a component is and how it relates to Vue, but here’s a simple and useful definition for you: components are reusable blocks that we create to build our UIs in a more flexible, scalable and performant way.

Vue offers two main ways to express components. First, we have direclty made components, which are built using a direct Vue instance as shown below:

```javascript
Vue.component("button-incrementer", {
  data: function() {
    return {
      greeting: "Hello Gorilla Logic!"
    };
  },
  template: "<p>{{ greeting }}</p>"
});
```

Then, we have the SFCs or Single File Components, where we can organize our logic in a more efficient, clean and readable way:

```vue
<template>
  <p>{{ greeting }}</p>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        greeting: "Hello Gorilla Logic"
      };
    }
  };
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
```

### Splitting Components

Vue offers another approach to use single file components, where we can split our logic into multiple files as shown below:

```html
<template>
  <div>Component's skeleton</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
```

The example above, help us to have more readility, but also improves our workflow when developing UIs with Vue.

## Component Structure

As you might have noticed, components include three important sections:

### Template

This is the skeleton of the component, mostrly based on HTMl but also enabled to use template expressions/literals.

```html
<template>
  <p>{{ greeting }}</p>
</template>
```

### Script

This is where the component's logic resides. The default apporach must use module.exports an object with including the multiple options available for the js portion of the component.

```javascript
<script>
module.exports = {
  data: function() {
    return {
      greeting: "Hello"
    };
  }
};
</script>
```

### Styles

Within this section we can include graphical customizations whether locally or globally, depending on our needs.

```css
<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

## Component Composition

There are multiple approaches (basic and advanced) to create components, but almost all of them share the are build using the following concepts:

### Data

The data is a very useful option in components that allow us to define internal information which will be part of the component's main functionaility. It's important to note that data is a function that returns an object, and every single position of the object will represent a data variable.

```javascript
data: function () {
  return {
    variableOne: 0,
    variableTwo: 'This is a text variale',
    variableThree: true,
  }
}
```

### Properties

Although data is useful to determine component's behavior, it's also important to have the ability to pass this data from partn compoents and/or pieces of our application and make the component reusable and confiruable. This is when properties come into place. Props are nothing but data we pass to a component. Here is how we can define a properties in a Vue.js component:

```javascript
props: {
    propOne: {
      type: Array,
      required: true,
      default: () => [],
    },
    propTwo: {
      type: String,
      default: 'All Podcasts',
    },
}
```

There are multiple thigns we can define for each property such as type, mandatoriness and default value.

### Methods

Methods are functions inside our Vue components, and this are especially useful to perform actions that were previously attached to an element as shown below:

```html
<template>
  <a @clicl="handleClick">
    {{ greetingFiltered }}
  </div>
</template>
```

```javascript
module.exports = {
  data: {
    greeting: "Hello Gorilla Logic"
  },
  methods: {
    handleClick: () => {
      console.log(this.greeting);
    }
  }
};
```

The `this` context variable will be automatically bounded to the method.

Please consider that methods are not cached, meaning the method will be executed regardless the reactive dependenices have changed or not.

### Computed Properties

Computed properties are meant to render properties that depend on a complex or elaborated logic behind the scenes. Even thoguh Vue accepts in-template expressions, good practices always recommend to use computed properties approach rather than creating complex and less readable in-template expressions. Let's see a clear use case:

#### In-tempalte expression

Here we are modifying a data property directly in our template, which makes the code less readable and harder to maintain.

```jsx
<div id="greeting-filtered">
  {{ greeting.replace(/hello/gi, 'Hi').toUpperCase() }}
</div>
```

#### Computed Property

On the other hand, with computed properties, we're delegating the transformation wihtin a function that will eventually use the defined data property.

```html
<template>
  <div id="greeting-filtered">
    {{ greetingFiltered }}
  </div>
</template>
```

```javascript
module.exports = {
  data: {
    greeting: "Hello Gorilla Logic"
  },
  computed: {
    greetingFiltered: () => {
      return greeting.replace(/hello/gi, "Hi").toUpperCase();
    }
  }
};
```

Take into consideration that computed properties will be cached based on their reactive dependencies, and won't be re-evaluated as long as those dependencies don't change.

### Watchers

Watchers are another (more generic and imperative) way of reacting to data changes. For people comming from AngularJs, this is very common, but Vue's approach is using computed properties rather than watchers. Let's take a look of one example comming directly from the official documentation:

```html
<div id="demo">{{ fullName }}</div>
```

```javascript
module.exports = {
  data: {
    firstName: "James",
    lastName: "Bond",
    fullName: "James Bond"
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  }
};
```

## Additional Links

In case you are intersted on deep diving the topics above, here are some useful links:

- [Vuejs.org](https://vuejs.org/) Learn more about this concepts in the official docs.
- [Vuemastery Courses](https://vuejs.org/) A more detailed and interactive path for beginners.

## Project Tasks

As described on the initial section, this Bootcamp is intended to be an experience while building a Vue.js based Podcast Player. Let's use the concepts we recently learnt to creat the basis for this app with the following tasks:

1. Create folders structure using Vue CLI including vueitfy as main design system.
2. Add a folder called API and use the include the utilies listed here as your main "fake" data provider.
3. Create configuration files.
4. Configure main base router.

## Resolution

Our first steps where focused on defining our app skeleton with the required configurations, tools and resources.

Let's take a look to the proposed solution:

{{ Link }}
