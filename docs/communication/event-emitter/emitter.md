
### Event-emitter pattern

So far we've just seen how to communicate components passing down data from parent to children. And how about the other way around ?.

Vue's children to parent communication is provided by [`$emit`](https://vuejs.org/v2/api/#vm-emit) API using the event emitter pattern.

`$emit` will trigger an event on the current instance. Any additional arguments will be passed into the listener’s callback function. 

Here's an example. First we define our custom component:

```javascript
Vue.component("GorillaButton", {
  template: `
    <button v-on:click="$emit('gorilla-event')">
      Emit Gorilla
    </button>
  `
});
```
Attached to the `v-on:click` event we are using `$emit` API to _emit_ a new event called `gorilla-event`. This name could have any name that you want, so keep that in mind.

Then in the parent component, where we use our custom `<GorillaButton />` we will be listening to a custom event `v-on:gorilla-event` in order to execute `onGorillaEvent` method in the parent component.

```HTML
<div id="app">
  <GorillaButton v-on:gorilla-event="onGorillaEvent" />
</div>
```

```javascript
new Vue({
  el: "#app",
  methods: {
    onGorillaEvent() {
      alert("You are a Gorilla  🦍🦍");
    }
  }
});
```

> This way every time we click the `<GorillaButton />` on our `App`, an event will be triggered in order to displan an alert.


#### Passing arguments to the custom event

Passing arguments to a parent using the event emitter patter is as simple as adding additional arguments to the `$emit` call like this.

Let's say we'll be passing the gorilla specie as an argument to our custom `gorilla-event`

```javascript
Vue.component("GorillaButton", {
  template: `
    <button v-on:click="$emit('gorilla-event', 'Mountain Gorilla')">
      Emit Gorilla
    </button>
  `
});
```

```HTML
<div id="app">
  <GorillaButton v-on:gorilla-event="onGorillaEvent" />
</div>
```

```javascript
new Vue({
  el: "#app",
  methods: {
    onGorillaEvent(specie) {
      alert(`You are a ${specie}  🦍🦍`);
    }
  }
});
```
Now the method attached to our custon `gorilla-event` will receieve the arguments passed to the `$emit` call.

::: tip
Unlike components and props, event names don’t provide any automatic case transformation. Instead, the name of an emitted event must exactly match the name used to listen to that event. For example, if emitting a camelCased event name:

```javascript
this.$emit('myEvent')
```

Listening to the kebab-cased version will have no effect:

```HTML
<!-- Won't work -->
<my-component v-on:my-event="doSomething"></my-component>
```

Unlike components and props, event names will never be used as variable or property names in JavaScript, so there’s no reason to use camelCase or PascalCase. Additionally, `v-on` event listeners inside DOM templates will be automatically transformed to lowercase (due to HTML’s case-insensitivity), so `v-on:myEvent` would become `v-on:myevent` – making myEvent impossible to listen to.

For these reasons, we recommend you **always use kebab-case for event names.**
:::

