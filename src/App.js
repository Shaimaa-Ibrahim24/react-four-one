import Home from "./Home/Home";
import Create from "./Create/Create";
import Root from "./Root";
import NotFound from "./NotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
      {/* ... etc. */}
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
