import { Suspense } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Suspense>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
