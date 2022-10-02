import React,{useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
  // const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const [videos, search] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  // useEffect(() => {
  //   onTermSubmit('buildings')
  // }, [])

  // const onTermSubmit = async term => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term
  //     }
  //   })

  //   setVideos(response.data.items)
  //   setSelectedVideo(response.data.items[0])
  // }

  // const onVideoSelect = v => {
  //   // console.log('From the App', v)
  //   setSelectedVideo(v)
  // }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App