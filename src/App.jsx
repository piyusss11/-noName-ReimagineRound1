import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import Home from "./pages/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SplashPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  // const [count, setCount] = useState(0)
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
