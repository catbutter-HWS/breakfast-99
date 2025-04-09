"use client"

import {usePathname} from 'next/Navgation'
import Image from 'next/image'

export default function CatImgBG(imgSrc , content)
{    
    const path = usePathname()
    return(
        <div>
            <div>
                <Image 
                    className = "absolute fill inset-0"
                    src={imgSrc}
                    style={{objectfill:cover}} 
                    alt={path}
                    />
                <div></div>
            </div>
        </div>
    )
}