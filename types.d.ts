interface Work {
    id: number
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