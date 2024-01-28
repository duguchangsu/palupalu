import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/toaster";

import NavigationMenuTop from "@/features/NavigationMenu";

export const Route = createRootRoute({
  component: () => (
    <div className="h-dvh">
      <NavigationMenuTop />
      <div className="p-4 h-5/6	">
        <Outlet />
      </div>
      <Toaster />
      <TanStackRouterDevtools />
    </div>
  ),
});
