import React from 'react'
import { useRouter } from 'next/router'

function Navebar() {

    const router = useRouter()
    const navAbout = () => {
        router.push('/about')
    }
    return (
        <div>
            <header class="text-gray-600 body-font">

                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span class=" text-xl ">Sumanta</span>
                    </a>

                    <nav class=" m-5 flex flex-wrap items-center text-base justify-center cursor-pointer ">
                        <button onClick={navAbout} class=" hover:text-gray-900"> about </button>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Navebar