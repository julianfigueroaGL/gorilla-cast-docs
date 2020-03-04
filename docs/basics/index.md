---
sidebar: auto
type: guide
---

# Vue JS Bootcamp

### Relevant terms

In this topic we will cover => Data Models, Virtual DOM, Flux Design Pattern, Installation, VUE-CLI, VUE-UI, among others

### Data Models

Data modeling is the process of creating a data model

> A data model is the process of design a data base structure that organizes elements of data.

### Virtual DOM

Vue accomplishes this by building a virtual DOM to keep track of the changes it needs to make to the real DOM

### Flux Design Pattern

The components in Flux's architecture interact more like an EventBus and less like an MVC. As mentioned earlier, Flux is not actually a library or a framework, it is a new kind of architecture that Facebook created to work with React:

- Actions: Helpers that pass data to the Dispatcher
- Dispatcher: REceives these Actions and broadcast paylodas to registered callbacks
- Stores: Act as a container for application state and logic
- Controller Views: React Components that grab the state from Stores and pass it down via props to child components

### Transpilers

Are tools that read source code written in one programming language, and produce the equivalent code in another language. Languages you write that transpile to JavaScript are often called compile-to-JS languages, and are said to target JavaScript

## Getting Started

### Prerequisites

- [NodeJS >= 8](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm) (Optional)
- Basic knowledge of Web Development

### Installation

### CDN

In the index.html you should add this:

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```

### Vue-CLI

In your terminal, run this commands:

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### Creating a Project

```bash
vue create hello-world
cd hello-world
npm install
npm run serve
```

You should now be able to visit [http://localhost:8080](http://localhost:8080) to see your local server running!