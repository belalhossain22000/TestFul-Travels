import React from "react";
import { PDFViewer, Document, Page, Text, View } from "@react-pdf/renderer";

const styles = {
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
};

const Blog = () => {
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View>
              <Text style={styles.title}>
                1. Tell us the differences between uncontrolled and controlled
                components.
              </Text>
              <Text style={styles.text}>
                Uncontrolled Components: An uncontrolled component is a
                component that manages its own state internally. The component
                is responsible for storing and updating its own state. The state
                of the component is not controlled by the parent component or
                any other external component. Usually, uncontrolled components
                are used for simple input forms, where state management can be
                handled internally.
              </Text>
              <Text style={styles.text}>
                Controlled Components: A controlled component is a component
                that does not manage its own state. The state of the component
                is controlled by the parent component or any other external
                component. The parent component passes down the state and props
                to the controlled component, which then updates the state based
                on user interaction. The parent component is responsible for
                handling the state of the controlled component. Usually,
                controlled components are used for complex input forms, where
                the state needs to be shared and updated by multiple components.
              </Text>
            </View>
            <View>
              <Text style={styles.title}>
                2. How to validate React props using PropTypes
              </Text>
              <Text style={styles.text}>
                React is a powerful tool for building user interfaces, but as
                your application grows, it can become difficult to manage the
                flow of data between components. One way to ensure that data is
                being passed correctly through your components is to validate
                the props that are being passed to them. React provides a
                library called prop-types that can be used to validate the props
                of a component. PropTypes is a lightweight library that is easy
                to use and can help catch potential issues early in the
                development process. In summary, validating React props using
                PropTypes is a simple and effective way to ensure that your
                components are being used correctly and can help catch potential
                issues early in the development process.
              </Text>
            </View>
            <View>
              <Text style={styles.title}>
                3 .Tell us the difference between nodejs and express js
              </Text>
              <Text style={styles.text}>
                Node.js provides a JavaScript runtime environment that enables
                developers to use JavaScript for server-side programming. With
                Node.js, developers can write server-side code in JavaScript,
                which is a popular and widely-used language for client-side web
                development. Node.js provides a set of built-in libraries and
                APIs that make it easy to write scalable, high-performance, and
                event-driven server-side applications.
              </Text>
              <Text style={styles.text}>
                Express.js, on the other hand, is a web framework that is built
                on top of Node.js. It provides a set of tools and APIs for
                building web applications, such as routing, middleware, and
                templating engines. Express.js simplifies the process of
                building web applications by providing a more streamlined
                approach to building routes and handling requests. Express.js is
                also known for its simplicity, flexibility, and scalability,
                making it a popular choice for building web applications.{" "}
              </Text>
            </View>
            <View>
              <Text style={styles.title}>
                4 .What is a custom hook, and why will you create a custom hook?{" "}
              </Text>
              <Text style={styles.text}>
                A custom hook is a function that uses built-in hooks and
                possibly other custom hooks to encapsulate some specific logic
                or behavior in a reusable way. Custom hooks allow developers to
                extract and share common logic across multiple components
                without duplicating code.
              </Text>
              <Text style={styles.text}>
                Custom hooks can also help you abstract away complex state
                management or other functionality from your components. By
                extracting the logic into a separate custom hook, you can
                simplify your components and make them easier to understand and
                test.
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default Blog;
