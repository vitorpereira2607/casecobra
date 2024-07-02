import React from 'react'
import { Star as LucideStar } from "lucide-react";

const Star = ({ count = 5 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <LucideStar
                    key={index}
                    className='size-4 text-green-600 fill-green-600'
                />
            ))}
        </>
    )
}

export default Star