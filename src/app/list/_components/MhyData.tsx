'use client'

import { useParams,useSearchParams } from 'next/navigation'
export default function MhyData () {
   const { id } = useParams()
   const searchParams = useSearchParams()
   return (
      <div>
         list ----- {id}
         <p>{searchParams.get('name')}</p>
      </div>
   )
}