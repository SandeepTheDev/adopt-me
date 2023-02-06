# React Introduction

React is a **component-based** JavaScript library for building user interfaces. **Component is a piece of UI that manage its own state**, then compose them to make complex UIs. 

👉 **React will efficiently update and render just the right components whenever the state change**.

## Virtual DOM vs Real DOM

DOM stands for Document Object Model. Its a tree like structure that represents the all nodes in the HTML document. React uses something called Virtual DOM to update Real DOM efficiently. Whenever the state of application changed React create a Virtual DOM with updated state and compares it with previous Virtual DOM and then sync it with Real DOM efficiently this process of comparision and updating the Real DOM is also known as **Diffing**. And the algorithm that is used to compare DOMs is **Diffing Algorithm.**

## Add React

To add React in a web page **react** and **react-dom** library is required.

- **react.development.js** lets you define React component
- **react-dom.development.js** lets React render HTML element to DOM.

## React.createElement(type, props?, children?)

```js
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello world!")
  );
};
```

## React.createRoot(container, options?)

**React 18 supports concurrency that helps with state update prioritazation**. `ReactDOM.render` does not support concurrency to use concurrency `ReactDOM.createRoot` is required.

```js
const container = document.getElementbyId("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
```

# Unidirectional data flow

React uses unidirectional data flow, means data can only be transfered from parent to child not vice versa (data from the parent is known as **props**). This means that the child component cannot update or modify the data on their own.

### Advantages of unidirectional flow
 
- **Debugging** It is easy to debug for a developer when data is going in one direction only.
- **Less error prone** its less error prone because child component cannot affect parent component on thier own.

# JSX

JSX is a way to describe what the UI should look like by using HTML like syntax instead of using `React.createElement`. JSX allows to use any valid JavaScript expression inside the curly braces.

### Difference between HTML and JSX

- JSX can have only single parent element.
- All tags in JSX are self closing type.
- `className` and `htmlFor` instead of `class` and `for` attributes.
- Inline styling.
- JavaScript inside JSX using curly braces.

# Hooks

Hooks is a speacial functions thats let you **hook into** React features. **Hooks cannot be called conditionally or inside loop**.

## State hook `useState`

`useState` is a hook that lets you add React state to function components.

```js
const locationHook = useState(""); // this will return an array
const location = locationHook[0];
const setLocation = locationHook[1];
```

## Effect hook `useEffect`

The effect hook lets you perform side effects in functional component. Effect happens after render, React guarantees the DOM has been updated by the time it runs the effects. **By default it runs both after the first render and after every update** `useEffect` can be customize by giving dependencies array.