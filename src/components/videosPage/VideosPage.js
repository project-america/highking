import React from 'react'
import './VideosPages.css'
import VideoIcon from '../../assects/icons/playIcon.svg'
import ReactPlayer from 'react-player'
function VideosPage() {
    var videos = [
        'https://www.youtube.com/watch?v=QY5WDJCJkm8',
        'https://www.youtube.com/watch?v=35npVaFGHMY' ,
        'https://www.youtube.com/watch?v=NhBzhi9jPFs',
        'https://www.youtube.com/watch?v=PsYhx7UVjAI',
        'https://www.youtube.com/watch?v=r1jvsggcV2Q',
        'https://www.youtube.com/watch?v=QpyzVINRLFM',
    ]
    return (
        <div className='video-section'>
            <div className='video-container'>
                {videos.map((video, key)=>{
                    return <div className='video-block'><ReactPlayer url={video}  controls={true} height={280} width={520}/></div>
                })}
                
            </div>
        </div>
    )
}

export default VideosPage
