interface Work {
    id: number
   url: string
    name: string
    pic: string
    description: string
    categories: Category[]
    icons: Icon[]
 }

 type Icon = {
    name: string;
    url: string;
  };

  type Category = {
   category_id: number,
   category_title: string
  }