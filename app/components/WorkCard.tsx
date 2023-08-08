import React from "react";

type Props = {
  work: Work;
};

function WorkCard({ work }: Props) {
  return (
    <>
      <div className="mx-auto">
        <div className="w-72 rounded-b overflow-hidden shadow-lg bg-slate-200">
          <img className="w-full" src={work.pic} alt={work.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{work.name}</div>
            <p className="text-gray-700 text-base">{work.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {work.categories.map((category) => (
              <span className="inline-block bg-amber-500  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {category}
              </span>
            ))}
            <div className="flex items-center py-4">
              {work.icons.map((icon) => (
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={icon}
                    alt="icon"
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkCard;