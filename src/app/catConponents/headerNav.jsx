"use client"

import {usePathname} from 'next/Navgation'
import { Star } from 'lucide-react'
import Link from 'next/link'

const navList = [
    {herf:"",text:""},
    {herf:"",text:""},
    {herf:"",text:""}
]

export default function HeadNav(INaviable){
    return(
        <div>
            navList.map((ele) = {
                <div>
                    <Link herf={ele.herf}>{ele.text}</Link>
                </div>
                })
        </div>
    )
}