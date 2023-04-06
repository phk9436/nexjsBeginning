import React from 'react'
import { useRouter } from 'next/router'

function Detail() {
    const {query} = useRouter();
    console.log(query)
  return (
    <div>
      <h4>{query.title}</h4>
    </div>
  )
}

export default Detail