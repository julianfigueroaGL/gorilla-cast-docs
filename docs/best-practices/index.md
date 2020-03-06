# Best Practices

- [Components](/best-practices/components/components/)
- [Templates](/best-practices/templates/templates/)
- [Routing](/best-practices/routing/routing/)
- [Vuex](/best-practices/vuex/vuex/)

## Other Best pratices:

### Performance

You have to set:

```js
Vue.config.performance = true;
```

Also consider to use:

- [Vue performance DevTool extension for Chrome](https://chrome.google.com/webstore/detail/vue-performance-devtool/koljilikekcjfeecjefimopfffhkjbne?hl=en)

### Error handling

Use:

```js
Vue.config.errorHandler;
```

Use:

- errorCaptured hook.

Set:

- Runtime error tracking using services like [Sentry](https://sentry.io/welcome/) and [Bugsnag](https://www.bugsnag.com/).

### Computed Properties

Split complex computed properties into as many simpler properties:

- Easier to test.
- Easier to read.
- More manageable.

### Component Data

- Define data props upfront to make them reactive.

```js
data() {
	return {
		isLoading: true,
		commitSha: null,
		diffViewType: 'inline',
		isParallelView: false,
		diffFiles: [],
		author: {
			username: ''
		}

	}
}

```

- Avoid manipulating the DOM directly.

- No need to put static data in Vue **data** object.

::: danger Bad

```js
import landingImage from "../images/landing";
export default {
  data() {
    return {
      landingImage: "..."
    };
  }
};
```

:::
::: tip Good

```js
import landingImage from '../images/landing';

export default {
	created() {
		this.landingImage: '...'
	};
}
```

:::

### Conditional Rendering

| Directive |        Description         |
| --------- | :------------------------: |
| `v-if`    |     Higher toggle cost     |
| `v-show`  | Higher initial render cost |
