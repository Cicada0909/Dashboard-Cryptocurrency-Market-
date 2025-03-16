import { RouterProvider } from "react-router-dom";
import router from "./constants/router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryCline = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryCline}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
