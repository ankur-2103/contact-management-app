import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import MapsAndCharts from "./Pages/MapsAndCharts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "./Components/Sidebar";
import NotFound from "./Pages/NotFound";

// This file creates different routes

// Create routes
const App = () => {
  return (
    <div className="flex">
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Sidebar/>
          <Routes>
            <Route index path="/contact" element={<Contact/>} />
            <Route path="/maps-and-charts" element={<MapsAndCharts />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
