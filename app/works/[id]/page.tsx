import NavbarSegunda from "@/components/NavbarWork";
import { Metadata, ResolvingMetadata } from "next";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import FAB from "@/components/FAB";


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

  return {
    title: id + " - F5antos Portfolio",
    description: id,
  };
}

//OBTENER EL CONTENIDO DEL POST MARKDOWN
const getPostContent = (slug: string) => {
  const folder = "posts/";
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
     
      <div className="py-32 p-12">
        {/* <WorkSection /> */}
        <h1 className="text-white text-2xl text-center">{post.data.title}</h1>
        <article className=" mx-auto prose prose-invert text-white lg:prose-xl">
        <Markdown >{post.content}</Markdown>
        </article>
     
      </div>
      <FAB />
      <div className="text-center">
        <a href="/" className="py-5 text-slate-300">
        ← Go back
        </a>

      </div>
    </>
  );
}
