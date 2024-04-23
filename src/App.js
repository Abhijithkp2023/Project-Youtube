import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children : [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/watch",
      element: <WatchPage />
    },
    {
      path: "/results",
      element: <Results />
    }
  ]
}])



function App() {
  return (
    <Provider store={store}>
      <div>
      <RouterProvider router={appRouter} >
       <Body />
       </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
