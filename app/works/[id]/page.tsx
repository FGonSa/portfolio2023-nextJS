import NavbarSegunda from "@/components/NavbarWork";
import { Metadata, ResolvingMetadata } from "next";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import FAB from "@/components/FAB";
import Footer from "@/components/Footer";


type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};


//METADATA DINÁMICA
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const post = getPostContent(id); // Obtener el contenido del post usando el ID

  // Asegúrate de que 'data.description' sea la propiedad correcta en tu estructura de datos
  const description = post.data.description;

  return {
    title: id + " - F5antos Portfolio",
    description: description,
  };
}

//OBTENER EL CONTENIDO DEL POST MARKDOWN
const getPostContent = (slug: string) => {
  const folder = "/posts/";
  const file = `${folder}${slug}.md`;

  try {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    // Si no se encuentra el archivo, cargar "404.md" en su lugar
    const notFoundContent = fs.readFileSync("posts/404.md", "utf8");
    const notFoundMatterResult = matter(notFoundContent);
    return notFoundMatterResult;
  }
};

export default function Page({ params }: { params: { id: string } }) {

  //Slug es el objeto que recibimos mediante la URL [id]
  //En este caso, es la propiedad URL de work.url que enviamos desde el componente WorkCard
  const slug = params.id

  const post = getPostContent(slug)

  return (
    <>
      <NavbarSegunda />
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        B</div>
      <div className="py-32 p-12">
        {/* <WorkSection /> */}
        <h1 className="text-white text-2xl text-center">{post.data.title}</h1>
        <article className=" mx-auto prose prose-invert text-white lg:prose-xl">
        <Markdown >{post.content}</Markdown>
        </article>
     
      </div>
      <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
                      <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
          </div>
      <FAB />
      <div className="text-center">
        <a href="/" className="py-5 text-slate-300">
        ← Go back
        </a>
<Footer />
      </div>
    </>
  );
}
