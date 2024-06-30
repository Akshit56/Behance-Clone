import React from 'react'
import { adobeLogo } from '../Data'
const Footer = () => {
    return (
        <section className='px-4 py-3 fixed w-full bottom-0 bg-white'>
            <div className="container-fluid ">
                {/* left side */}
                <div className="grid lg:grid-cols-2 gap-5 items-center ">
                <div className="left-foot">
                    <ul className='flex items-center'>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">More Behance</a></li>
                        <span className='text-gray-300'>|</span>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">English</a></li>
                        <span className='text-gray-300'>|</span>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Try Behance Pro</a></li>
                        <span className='text-gray-300'>|</span>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">TOU</a></li>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Community</a></li>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Help</a></li>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Cookie Preferences</a></li>
                        <li className='mx-3 font-small text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Help</a></li>
                    </ul>
                </div>

                <div className="adobe-right flex lg:justify-end">
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                        <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                        <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Footer