// import { createBrowserRouter, RouterProvider } from "react-router";
// import "./App.css";

// import Student from "./crudApp/student";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Student />,
//   },
// ]);

// function display() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default display;

import { Pokemon } from "./projectComp/Pokemon";
import "./index.css";

function App() {
  return <Pokemon />;
}

export default App;
