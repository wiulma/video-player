import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"

import './VideoPlayer.css'

const VideoPlayerCmp = React.memo(({isPlaying, volume}) => {

    console.log('VideoPlayerCmp function')

    useEffect(() => console.log('VideoPlayerCmp effect no deps'), [])

    const videoRef = useRef()

    useEffect(() => {
        console.log('VideoPlayer::useEffect isPlaying', isPlaying)
        if(!videoRef.current) return
        videoRef.current[isPlaying ? 'play' : 'pause']()
    }, [isPlaying])

    useEffect(() => {
        if(!videoRef.current) return
        console.log('VideoPlayer::useEffect volume', volume)
        videoRef.current.volume = volume
    }, [volume])

    
    const onPlayerCanPlayThrough = () => {
        console.log('onPlayerCanPlayThrough, duration', videoRef.current.duration)
    }

    return (
        <video ref={videoRef} className="player" controls={false} autoPlay={false} volume={.5} onCanPlayThrough={onPlayerCanPlayThrough}>
            <source src="./sample-video.mp4" type="video/mp4"></source>
            Sorry your browser don't support video
        </video>
    )
})

const mapStateToProps = ({player: {isPlaying, volume}}, ownProps) => ({
    isPlaying,
    volume,
    ...ownProps
})

export const VideoPlayer = connect(mapStateToProps)(VideoPlayerCmp)