"use client";

// # Creating a React Query client
// Create a React Query client in the root of your component tree. In Next.js app router applications, this is the layout.tsx file in the app folder.

// The QueryClientProvider can only be used in client components and can't be directly embedded in the layout.tsx file.
// Therefore make sure to create a client component first, e.g.

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  // const queryClient = new QueryClient();
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
