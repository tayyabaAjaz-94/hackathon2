import { StaticImageData } from "next/image"
interface Items {
  id:number
  img: StaticImageData
  title:string
  title2:string
  price:string
}

import Best1 from "../public/Best/b1.png"
import Best2 from "../public/Best/b2.png"
import Best3 from "../public/Best/b3.png"
import g1 from "../public/g1.png";
import g2 from "../public/g2.png";
import g3 from "../public/g3.png";
import g4 from "../public/g4.png";
export const airMax:Items[] = [
  {
      id:1,
      img:Best1,
      title:"Nike Air Max Pulse",
      title2:"Women's Shoes",
      price:"₹ 13 995"
  },
  {
      id:2,
      img:Best2,
      title:"Nike Air Max Pulse",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:3,
      img:Best3,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:4,
      img:Best3,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
]

export const gear1:Items[] = [
  {
      id:1,
      img:g1,
      title:"Nike Air Max Pulse",
      title2:"Women's Shoes",
      price:"₹ 13 995"
  },
  {
      id:2,
      img:g2,
      title:"Nike Air Max Pulse",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:3,
      img:g1,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:4,
      img:g2,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
]

export const gear2:Items[] = [
  {
      id:1,
      img:g3,
      title:"Nike Air Max Pulse",
      title2:"Women's Shoes",
      price:"₹ 13 995"
  },
  {
      id:2,
      img:g4,
      title:"Nike Air Max Pulse",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:3,
      img:g3,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:4,
      img:g4,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
]