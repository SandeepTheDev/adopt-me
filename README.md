# React Introduction

React is a **component-based** JavaScript library for building user interfaces. **Component is a piece of UI that manage its own state**, then compose them to make complex UIs.

👉 **React will efficiently update and render just the right components whenever the state change**.

## Virtual DOM vs Real DOM

DOM stands for Document Object Model. Its a tree like structure that represents the all nodes in the HTML document. React uses something called Virtual DOM to update Real DOM efficiently. Whenever the state of application changed React create a Virtual DOM with updated state and compares it with previous Virtual DOM and then sync it with Real DOM efficiently this process of comparision and updating the Real DOM is also known as **Diffing**. And the algorithm that is used to compare DOMs is **Diffing Algorithm.**

## Add React

To add React in a web page **react** and **react-dom** library is required.

- **react.development.js** lets you define React component
- **react-dom.development.js** lets React render HTML element to DOM.

👉 development build has more helpful error message which makes it slow for production ready build replace `development.js` with `production.min.js`.

Bundlers like parcel, vite handles it automatically but for webpack NODE_ENV=production must be configured while creating production ready build of React app.

### React.createElement(type, props?, children?)

```js
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello world!")
  );
};
```

### React.createRoot(container, options?)

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

# Component composition

Smaller components are easier to read, easier to understand and easier to test. A nice rule of thumb **component should not exceed 250 lines under 100 lines is ideal**.

# Strict Mode

React has a new strict mode by wrapping React app with <React.StrictMode> it log additional warnings about legacy features or things that will be soon be deprecated.

👉 StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).

# Controlled form vs Uncontrolled form

In controlled form we keep track state for each input fields this is not a good practice because the only time we ever really use these information is on submit.

```js
const [requesParams, setRequestParams] = useState({
  location: "",
  animal: "",
});

const onSubmit = (e) => {
  const formData = new FormData(e.target);
  const obj = {
    location: formData.get("location") || "",
    animal: formData.get("animal") || "",
  };
  setRequestParams(obj);
};

return (
  <form onSubmit={onSubmit}>
    <label htmlFor="location">Location</label>
    <input name="location" id="location" placeholder="location" />
    <label htmlFor="animal">Animal</label>
    <input name="animal" id="animal" placeholder="animal" />
    <button>Submit</button>
  </form>
);
```

# Error Boundaries

Error Boundaries is a React class component that catch Errors anywhere in their child component and display a fallback UI.

# Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

👉 Portals behaves like a normal React child everything work exactly the same like **context**, **event fired inside a portal will propogate regardless of its position in DOM tree** exactly the same.

```js
<html>
  <body>
    <div id="portal"></div>
    <div id="root"></div>
  </body>
</html>
```

A Parent component in #root would be able to catch an uncaught, bubbling event from the sibling node #portal.