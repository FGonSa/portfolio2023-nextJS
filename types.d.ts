interface Work {
    id: number
   url: string
    name: string
    pic: string
    description: string
    categories: string[]
    icons: Icon[]
 }

 type Icon = {
    name: string;
    url: string;
  };