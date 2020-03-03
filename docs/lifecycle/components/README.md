---
sidebar: auto
type: guide
---

# Components

## Definition

On the Internet, we could find a lot of good and extensive definitions about what a component is and how it relates to Vue, but here’s a simple and useful definition for you:  components are reusable blocks that we create to build our UIs in a more flexible, scalable and performant way. 

Below, is a very basic example of a Vue component thet basically renders a greeting text:

```vue
<template>
  <p>{{ greeting }}</p>
</template>

<script>
module.exports = {
  data: function() {
    return {
      greeting: "Hello Gorilla Logic” 
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

As you might have noticed, the component includes three important sections:

Template: 
Script: 
Styles:

There are multiple approaches (basic and advanced) to create components, but almost all of them share the are build using the following concepts

<ol>
    <li>Data</li>
    <li>Properties</li>
    <li>Computed Properties</li>
    <li>Watchers</li>
    <li>Styles</li>
    <li>Methods</li>
    <li>Pages</li>
</ol>


## Project Tasks

Now in our project, let's do this...