import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import SmoothScroll from "./components/SmoothScroll";

function Router() {
  return (
    <div className="min-h-screen">
      <Switch>
        {/* Home page: self-contained with Navbar, all sections, Footer */}
        <Route path="/" component={Home} />

        {/* Sub-pages — these can share a separate layout if needed */}
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:projectId" component={ProjectDetail} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
        <Router />
      </SmoothScroll>
    </QueryClientProvider>
  );
}

export default App;
