import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

interface Category {
  category_id: number;
  category_title: string;
}

interface Icon {
  url: string;
  name: string;
}

interface Work {
  url: string;
  pic: string;
  name: string;
  description: string;
  categories: Category[];
  icons: Icon[];
}

interface Props {
  work: Work;
}


const WorkCard: React.FC<Props> = ({ work }) => {
  return (
    <>
      <Link href={`/works/${work.url}`}>
        <div className="w-72 h-full rounded-b overflow-hidden shadow-lg bg-slate-100 hover:bg-slate-200">
          <Image
            width={480}
            height={360}
            className="w-full"
            src={work.pic}
            alt={work.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{work.name}</div>
            <p className="text-gray-700 text-base">{work.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {work.categories.map((category) => (
              <span
                key={category.category_id}
                className="inline-block bg-amber-500  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {category.category_title}
              </span>
            ))}
            <div className="flex items-center py-4">
              {work.icons.map((icon) => (
                <div
                key={icon.url}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={icon.name}
                >
                  <Tooltip id="my-tooltip"  key={`tooltip-${icon.url}`}/>
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src={icon.url}
                    alt="icon"
                    key={icon.url}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default WorkCard;
