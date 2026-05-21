import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hok-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold">404</h1>
        <h2 className="mt-4 text-xl font-display font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-hok-text px-6 py-3 text-sm font-semibold text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-hok-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-hok-text px-6 py-3 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border-2 border-hok bg-hok-bg px-6 py-3 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HOKmakeup — Beauty is for all" },
      { name: "description", content: "HOKmakeup — premium beauty, bold makeup, skin, hair & fragrance. Beauty is for all, so why restrict it to borders?" },
      { property: "og:title", content: "HOKmakeup — Beauty is for all" },
      { property: "og:description", content: "HOKmakeup — premium beauty, bold makeup, skin, hair & fragrance. Beauty is for all, so why restrict it to borders?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HOKmakeup — Beauty is for all" },
      { name: "twitter:description", content: "HOKmakeup — premium beauty, bold makeup, skin, hair & fragrance. Beauty is for all, so why restrict it to borders?" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f3e54279-87e3-400a-8ed4-6acbccca0a23/id-preview-fba84d87--959079b2-dce5-45b5-a7f6-975986d0bf5f.lovable.app-1779376006863.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f3e54279-87e3-400a-8ed4-6acbccca0a23/id-preview-fba84d87--959079b2-dce5-45b5-a7f6-975986d0bf5f.lovable.app-1779376006863.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
