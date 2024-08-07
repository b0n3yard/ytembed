import YoutubeEmbed from "../assets/embedd"
import React from "react"
function Video({id}){
    return(
    <>
    <section className="videos">
        <YoutubeEmbed embedId={id}/>
            {console.log(id)}
    </section>
    </>)
}

export default Video