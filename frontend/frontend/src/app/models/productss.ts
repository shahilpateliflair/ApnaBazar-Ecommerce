
// export interface productss {
   
   
//     _id: string; 
//     name: string;
//     description: string;
//     price: number;
//     MRP: number;
//     off: number;
//     origins: string[];
//     deliverTime: string[];
//     image: string[];
//  tag:string;
 
//   }
export interface productss {
    _id: string;
    name: string;
    description: string;
    price: number;
    category:string;
    MRP: number;
    off: number;
    origins: string[];
    deliverTime: string[];
    tag: string;
    variants: Variant[];
}

export interface Variant {
    size: string;
    color: string;
    available: boolean;
    images: Image[]; 
}



export interface Image {
    color: string;
    urls: string[];
}
  