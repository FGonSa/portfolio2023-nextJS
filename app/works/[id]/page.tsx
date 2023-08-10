import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1 className="text-center py-5 text-slate-300">ID: {params.id}</h1>
      <div className="text-center">
        <a href="/" className="py-5 text-slate-300">
          Go back
        </a>
      </div>
    </>
  );
}
