import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LogoPage from "./pages/LogoPage";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
});

// Root route — renders an Outlet; Layout pages and bare pages both hang off this
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Pathless layout route — wraps standard pages with the shared Layout shell
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services",
  component: ServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: ContactPage,
});

// /logo — standalone bare route, direct child of rootRoute, no Layout wrapper
const logoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/logo",
  component: LogoPage,
});

// Build the route tree: layoutRoute wraps standard pages; logoRoute is bare
const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([homeRoute, aboutRoute, servicesRoute, contactRoute]),
  logoRoute,
]);

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => null,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
