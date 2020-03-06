# Design Patterns for Components

In the process of web developement you want create manageable and maintainable code. To makes this possible is neccesary to adopt best practices, known as `patterns`.

## Why is important the communication between components

Creating a Vuejs app you need to make the components as isolated as they can be, this would make them in reusable and decoupled/loosely coupled shape.

## Main types of communication between components

### Direct parent-child communication

This is the common model of components communication in Vuejs, it works passing values as `props` form Parent to child.

<img src="https://cms-assets.tutsplus.com/uploads/users/2028/posts/32354/image/vueccparentchild.png" alt="Parent-child pattern">

Parent Component:

```html
<template>
   <child-component :track="track">
</template>
<script>
export default {
	data() {
		return {
			track: {}
		}
	}
}
</script>
```

Child Component:

```html
<template>
  <div>
    {{ track }}
  </div>
</template>
<script>
  export default {
    props: {
      track: {
        default() {
          return {};
        },
        required: true,
        type: Object
      }
    }
  };
</script>
```

### Cross-component communication

The parent-child communication pattern becomes inconvenient and impractical as complexity grows.

<img src="https://cms-assets.tutsplus.com/uploads/users/2028/posts/32354/image/vuecccross.png" alt="Cross component pattern">

Every component can send and/or receive data from any other component.

Using the Global Event Bus this can be achieved:

```js
created () {
  eventBus.$on('updatingScore', newValue => this.score = newValue)
}
```

### [Vuex](/stores/vuex/vuex/)

### Dependency Injection

Allows you to define a service via the `provide` property, which should be an object or a function that returns an object, and make it available to all of the component's descendants, not juts it's direct children.

Please avoid using `this.$root` because can creates too many dependencies.

### How to use the right pattern

- For **small apps**, the props and events will be just fine.
- For **middle range apps**, flexibility will be needed, for this Event Bus becomes handy.
- For **large apps**, you will need Vuex.
