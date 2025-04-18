import React, { useEffect } from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = ({ sidebar, category, setCategory }) => {
  const {videoId, categoryId} = useParams();
  
  // Update the category when navigating to a video with a different category
  useEffect(() => {
    if (categoryId && parseInt(categoryId) !== category) {
      setCategory(parseInt(categoryId));
    }
  }, [categoryId, category, setCategory]);

  return (
    <div className={`play-container ${sidebar ? "" : "play-container-expanded"}`}>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
