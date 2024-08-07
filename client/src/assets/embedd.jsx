import React from "react";
import PropTypes from 'prop-types'

const YoutubeEmbed = ({embedId})=>(
    <div className="video-responsive">
        <iframe 
        width='720'
        height='480'
        src={`https://www.youtube.com/embed/${embedId}`} frameBorder="0"
        allow="accelerometer; encrypted-media"
        allowFullScreen
        title="Embedded"
        />

        
    </div>
)
YoutubeEmbed.PropTypes= {
    embedId: PropTypes.string.isRequired
}
export default YoutubeEmbed