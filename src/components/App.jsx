import OrderForm from "./OrderForm";

export default function App() {
  return (
    <>
      <OrderForm />

      {/* <MyComponent>
        {name => {
          return <div>Welcome {name}</div>;
        }}
      </MyComponent> */}
    </>
  );
}

// Render props
// function MyComponent({ children }) {
//   const username = "Jacob";

//   return children(username);
// }
