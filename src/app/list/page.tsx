
import Link from "next/link"
import { Metadata } from 'next';

export const metadata: Metadata = {
   title:"这是列表",
   description:""
}

export default function ListPage () {

   const data = [
      {
         id:1,
         name:'第一个数据'
      },
      {
         id:2,
         name:'第二个数据'
      },
      {
         id:3,
         name:'第三个数据'
      },
   ]

   return (
      <div>
         <div>这是List</div>
         <ul>
            {data.map((item) => (
               <li key={item.id}><Link href={'/list/' + item.id + '?name=' + item.name}>{item.name}</Link></li>
            ))}
         </ul>
      </div>
   ) 
} 