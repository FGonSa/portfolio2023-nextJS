import '../globals.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-gray-900">
        <div className="">
          {children}

        </div>
      </body>
    </html>
  );
}
