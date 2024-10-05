"use client"; // Mark it as a client component

import { ClerkProvider } from '@clerk/nextjs';

export default function ClerkProviderWrapper({ children }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}
