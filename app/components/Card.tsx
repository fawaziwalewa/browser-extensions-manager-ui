'use client'
import Image from 'next/image'

interface CardProps {
    id: number;
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
    onToggle: (index: number) => void;
    onRemove: (index: number) => void;
}

const Card = ({ id, logo, name, description, isActive, onToggle, onRemove }: CardProps) => {

    return (
        <div className="flex flex-col justify-between gap-10 p-5 border shadow-md rounded-2xl border-neutral-200 bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-600">
            <div className="flex items-start gap-3">
                <Image
                    src={logo}
                    alt={name}
                    width={60}
                    height={60}
                />
                <div>
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">{name}</h2>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">{description}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button type="button" className="px-4 py-2 font-medium border cursor-pointer rounded-3xl border-neutral-300 text-neutral-900 dark:text-neutral-50 dark:border-neutral-600 bg-none" onClick={() => {
                    onRemove(id)
                }}>Remove</button>
                <div className="flex items-center justify-center">
                    <div className={`relative rounded-full w-9 h-5 transition duration-200 ease-linear ${isActive ? 'bg-red-700' : 'bg-neutral-300 text-neutral-900 dark:bg-neutral-600'}`}>
                        <label htmlFor={id.toString()}
                            className={`absolute left-0 bg-white border-2 mb-2 size-5 rounded-full transition transform duration-100 ease-linear cursor-pointer ${isActive ? 'translate-x-full border-red-700' : 'translate-x-0 border-neutral-300 text-neutral-900'}`}><span className="sr-only">Enable/Disable Extension</span></label>
                        <input type="checkbox" id={id.toString()} name={name}
                            className="w-full h-full appearance-none active:outline-none focus:outline-none" onClick={() => {
                                onToggle(id)
                            }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;