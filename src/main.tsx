import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Queue from "./components/Queue/Main/Queue";
import QueueForm from "./components/Queue/Form/QueueForm";
import ShowQueue from "./components/Queue/ShowQueue/ShowQueue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Queue />,
  },
  {
    path: "/form",
    element: <QueueForm />,
  },
  {
    path: "queue/showqueue/:id",
    element: <ShowQueue />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
