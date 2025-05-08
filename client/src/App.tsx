import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { FloaingBtn } from "./components/FloaringBtn";

import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/pages/Projects"; // Added import for Projects page
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function Router() {
  const [location] = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:projectId" component={ProjectDetail} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <FloaingBtn />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

// https://www.youtube.com/watch?v=yOzUg9HDtFw
