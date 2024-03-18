type categorymodel = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  image?: string;
  color: string;
};

type optionModel = {
    id : string,
    title : string,
    price : number
}

type productModel = {
    id: number;
    title: string;
    description?: string;
    image?: string;
    price: number;
    options : optionModel[],
    category : categorymodel
}