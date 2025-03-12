import {Link} from 'next/link'

import Posts from "@/app/utils/NullPoint"

export default function blog(){
    return(
        Posts.map(post)
    )
}