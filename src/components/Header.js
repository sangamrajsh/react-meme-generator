import React from "react"
import logo from "../assets/logowhite.png"


export default function Header(){
    return(
        <header className="header">
            <nav className="width-screen gradient--bg">
                <div className="sm:container p-auto grid grid-cols-12 gap-1 m-auto">
                    <div className="col-span-1 p-3">
                        <img className="md:w-20 min-w-10" src={logo} alt="Logo"/>
                    </div>
                    <div className="col-span-10 text-center font-bold text-white text-2xl md:text-3xl m-auto">
                        Rajesh's Meme Generator
                    </div>
                </div>
            </nav>
            
        </header>
    )
}