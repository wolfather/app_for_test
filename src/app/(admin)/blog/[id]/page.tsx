'use client'

import { useParams } from "next/navigation"

export default function Blog() {
    const params = useParams()
    
    console.log({params})

    return (<div>
        <h1>BLog page</h1>

        <article>
            Here's the article #{params.id} at my blog.
        </article>
    </div>)
}