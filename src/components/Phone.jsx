import { cn } from '@/lib/utils'

const Phone = ({ className, imgSrc, dark = false, ...props }) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden rounded-40", className)} {...props}>
            <img
                src={
                    dark
                        ? "/phone-template-dark-edges.png"
                        : "/phone-template-white-edges.png"
                }
                className="pointer-events-none z-50 select-none"
                alt="phone image"
            />
            <div className='absolute -z-10 inset-0'>
                <img
                    src={imgSrc}
                    className="object-cover size-full"
                    alt='overlaying phone image'
                />
            </div>
        </div>
    )
}

export default Phone