# Lifecycle Hooks

As many other javascript frontend frameworks, Vue runs through a lifecycle flow where we can identify special or key moments.

<img :src="$withBase('/lifecycle.png')" style="text-align:center"/>

These moments into the lifecycle flow are direclty tied to a very special set of methods, and those methods are known as lifecycle hooks. 

Lifecycle hooks allow us to leverage our application's behavior by performing actions such as fetching data, communicating events and so on.

Let's take a look at some useful concepts when it comes to lifecycle.

## Reactivity
## Data rendering
## Directives (also data binding)
## Event handling
## Event propagation management

## Hooks Definitions

Now, let's take a look the main hooks provided by Vue.

:::tip TIP
Take into consideration that some of this methods doesn’t get called when doing server-side rendering
:::

## beforeCreate

This hook is called synchronously immediately after the instance has been initialized. At this point data has not been made reactive, and events have not been set up yet.

```javascript
export default {
  beforeCreate() {
    console.log('Nothing gets called before me!')
  }
}
```

## created

This hook is called synchronously after the instance is created. At this point you will be able to access reactive data and events are active. Templates and Virtual DOM have not yet been mounted or rendered. The ```$el ```is not available yet because the mount phase has not been completed yet.

```javascript
export default {
  data() {
    return {
      property: 'Blank'
    }
  },

  computed: {
    propertyComputed() {
      console.log('I change when this.property changes.')
      return this.property
    }
  },

  created() {
    this.property = 'Example property update.'
    console.log('propertyComputed will update, as this.property is now reactive.')
  }
}
```

## beforeMount

The beforeMount hook runs right before the initial render happens and after the template or render functions have been compiled.

```javascript
export default {
  beforeMount() {
    console.log(`this.$el doesn't exist yet, but it will soon!`)
  }
}
```

## mounted

This hook is called after the instance has been mounted. At this point you will have full access to the reactive component, templates, and rendered DOM (via. this.$el). The most frequently used patterns are fetching data for your component (use created for this instead,) and modifying the DOM, often to integrate non-Vue libraries.

```html
<template>
  <p>I'm text inside the component.</p>
</template>
```
```javascript
export default {
  mounted() {
    console.log(this.$el.textContent) // I'm text inside the component.
  }
}
```

## beforeUpdate
This hook is called when data changes, before the DOM is patched. It allows you to get the new state of any reactive data on your component before it actually gets rendered

```javascript
export default {
  data() {
    return {
      counter: 0
    }
  },

  beforeUpdate() {
    console.log(this.counter) // Logs the counter value every second, before the DOM updates.
  },

  created() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
```

## updated
This hook is called after a data change causes the virtual DOM to be re-rendered and patched. If you need to access the DOM after a property change, here is probably the safest place to do it.

```html
<template>
  <p ref="dom-element">{{counter}}</p>
</template>
```

```javascript
export default {
  data() {
    return {
      counter: 0
    }
  },

  updated() {
    // Fired every second, should always be true
    console.log(+this.$refs['dom-element'].textContent === this.counter)
  },

  created() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
```
## activated
This hook is called when a kept-alive component is activated.

## deactivated
This hook is called when a kept-alive component is deactivated.

## beforeDestroy
This hook is called right before a Vue instance is destroyed. At this stage the instance is still fully functional. If you need to cleanup events or reactive subscriptions, beforeDestroy would probably be the time to do it.

```javascript
export default {
  data() {
    return {
      someLeakyProperty: 'I leak memory if not cleaned up!'
    }
  },

  beforeDestroy() {
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    this.someLeakyProperty = null
    delete this.someLeakyProperty
  }
}
```

## destroyed

This hook is called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed

```javascript
import MyCreepyAnalyticsService from './somewhere-bad'

export default {
  destroyed() {
    console.log(this) // There's practically nothing here!
    MyCreepyAnalyticsService.informService('Component destroyed. All assets move in on target on my mark.')
  }
}
```

## Additional Links

- [Lifecycle Hooks](https://alligator.io/vuejs/component-lifecycle/) Learn about lifecycle hooks in depth
- [Lifecycle Hooks](https://alligator.io/vuejs/component-lifecycle/) Learn about lifecycle hooks in depth