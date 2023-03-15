import { RouterProvider } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { Provider } from 'react-redux';
import store from "./Store/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={MainRoutes} />     
      </Provider>
    </div>
  );
}

export default App;
