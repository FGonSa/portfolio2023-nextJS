

 
export default function CarrouselWorks() {
  return (
   <>
   <div className="mx-auto">

   <div className="max-w-sm  rounded-b overflow-hidden shadow-lg bg-slate-200">
  <img className="w-full" src="/pic4.png" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    <div className="flex items-center py-4">
      <img className="w-10 h-10 rounded-full mr-4" src="/pic1.png" alt="Avatar of Jonathan Reinink" />
      <img className="w-10 h-10 rounded-full mr-4" src="/pic1.png" alt="Avatar of Jonathan Reinink" />
      <img className="w-10 h-10 rounded-full mr-4" src="/pic1.png" alt="Avatar of Jonathan Reinink" />
    </div>
  </div>

</div>
   </div>
   </>
  );
}