import React from "react";

const Blog = () => {
  return (
    <div className="w-[70%] mx-auto my-20">
      <h1 className="font-bold text-2xl my-5">
        1. Tell us the differences between uncontrolled and controlled
        components.
      </h1>
      <p>
        <span className="font-semibold">Uncontrolled Components</span>: An
        uncontrolled component is a component that manages its own state
        internally. The component is responsible for storing and updating its
        own state. The state of the component is not controlled by the parent
        component or any other external component. Usually, uncontrolled
        components are used for simple input forms, where state management can
        be handled internally.
      </p>
      <p>
        <span className="font-semibold">Controlled Components:</span>: A
        controlled component is a component that does not manage its own state.
        The state of the component is controlled by the parent component or any
        other external component. The parent component passes down the state and
        props to the controlled component, which then updates the state based on
        user interaction. The parent component is responsible for handling the
        state of the controlled component. Usually, controlled components are
        used for complex input forms, where the state needs to be shared and
        updated by multiple components..
      </p>
      <h1 className="font-bold text-2xl my-5">
        {" "}
        2. How to validate React props using PropTypes
      </h1>
      <p>
        React is a powerful tool for building user interfaces, but as your
        application grows, it can become difficult to manage the flow of data
        between components. One way to ensure that data is being passed
        correctly through your components is to validate the props that are
        being passed to them. React provides a library called prop-types that
        can be used to validate the props of a component. PropTypes is a
        lightweight library that is easy to use and can help catch potential
        issues early in the development process. In summary, validating React
        props using PropTypes is a simple and effective way to ensure that your
        components are being used correctly and can help catch potential issues
        early in the development process.
      </p>
      <h1 className="font-bold text-2xl my-5">
        Tell us the difference between nodejs and express js
      </h1>
      <p>
        Node.js is a runtime environment that allows JavaScript to be run on the
        server-side, while Express.js is a web framework built on top of Node.js
        that simplifies the process of building web applications. Node.js
        provides a platform for running server-side JavaScript code, while
        Express.js provides a set of tools and APIs for building web
        applications, such as routing, middleware, and templating engines.
        Express.js can be seen as a higher-level abstraction on top of Node.js,
        making it easier to build web applications by providing a more
        streamlined approach to building routes and handling requests. In
        summary, Node.js is the underlying technology that enables server-side
        JavaScript, while Express.js is a framework that uses Node.js to build
        web applications.
      </p>
      <h1 className="font-bold text-2xl my-5">
        What is a custom hook, and why will you create a custom hook?
      </h1>
      <p>
        in React, a custom hook is a JavaScript function that starts with the
        prefix 'use' and allows developers to extract and reuse logic from
        functional components. Custom hooks enable us to keep the stateful logic
        in a separate function and then use it across multiple components.
        Custom hooks are created to solve problems that are not addressed by the
        built-in React hooks or to simplify and reuse the code for common
        patterns. For example, if we have a form that has multiple fields, we
        can create a custom hook to handle the form state and validation logic.
        Then we can reuse that hook across different forms in the application,
        making our code more modular and maintainable. In addition to extracting
        logic from components, custom hooks can also provide a way to abstract
        complex functionality into simpler and more reusable code. They can help
        us to write more readable and testable code, making our development
        process more efficient. Overall, custom hooks provide a powerful tool
        for managing complex stateful logic and code reuse in React, allowing
        developers to create more efficient and scalable applications.
      </p>
    </div>
  );
};

export default Blog;
