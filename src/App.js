import { RouterProvider } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div>
      <RouterProvider router={MainRoutes} />     
    </div>
  );
}

export default App;
