import Category from "./Category";

export default interface ProductVM{
    kode:string;
    title:string;
    desc:string;
    url:string;
    price:string;
    category:Category;
    images:any;
    stok:number;
}