import '../globals.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-900">
        <div className="">
          {children}
        </div>
      </div>
      </>
  );
}
