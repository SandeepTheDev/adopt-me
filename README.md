# What is React

React is a **component-based** JavaScript library for building user interfaces. **Component is a piece of UI that manage its own state**, then compose them to make complex UIs. 

👉 **React will efficiently update and render just the right components whenever the state change**.

## Virtual DOM vs Real DOM

DOM stands for Document Object Model. Its a tree like structure that represents the all nodes in the HTML document. React uses something called Virtual DOM to update Real DOM efficiently. Whenever the state of application changed React create a Virtual DOM with updated state and compares it with previous Virtual DOM and then sync it with Real DOM efficiently this process of comparision and updating the Real DOM is also known as **Diffing**. And the algorithm that is used to compare DOMs is **Diffing Algorithm.**

## How to add React in a web page

To add React in a web page **react** and **react-dom** library is required. **react** contains all required APIs and **react-dom** is renderer that talks to web page DOM.