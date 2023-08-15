import '../globals.css'
import type { Metadata } from "next";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900">
        <div className="">
          {children}
          {/* <Contact /> */}
        </div>
      </body>
    </html>
  );
}
