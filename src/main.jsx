import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./auth/AuthContext";
import { ApiProvider } from "./api/ApiContext";
import { PageProvider } from "./layout/PageContext";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ApiProvider>
        <PageProvider>
          <Layout>
            <App />
          </Layout>
        </PageProvider>
      </ApiProvider>
    </AuthProvider>
  </QueryClientProvider>
);
