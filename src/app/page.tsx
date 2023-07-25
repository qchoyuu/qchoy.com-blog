import { Metadata } from 'next';

export const metadata: Metadata = {
   title:"首页",
   description:"这是第一个页面"
}

export default function Home() {
   return (
      <div>这是home</div>
   )
}
