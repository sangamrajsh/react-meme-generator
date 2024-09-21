import React from "react"



export default function Main(){
    
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3eqjd8.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
        function getMemeImage(){
        //const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main className="flex-col p-5 min-h-full">
            
                <div className="flex gap-2 flex-row pb-4 form grow-0">
                    <input 
                    type="text"
                    className="pr-2 w-full p-2 border rounded border-gray-400 " 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />

                
                    <input 
                    type="text"
                    className="pl-2  w-full p-2 border rounded border-gray-400" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                </div>
                

                <button onClick={getMemeImage} className="gradient--bg rounded w-full p-2 text-white border-none grow-0">Get a new random meme image</button>
                <div className="meme--container h-full">
                    <img src={meme.randomImage} className="w-full my-1.5 meme--img" alt=""/>
                    <h2 className="text--decoration top--text">{meme.topText}</h2>
                    <h2 className="text--decoration bottom--text">{meme.bottomText}</h2>
                    
                </div>       
        </main>
    )
}