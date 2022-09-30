import {useEffect, useRef} from 'react'
import { PlayPauseButton } from '../playpause/PlayPauseButton'
import { Timeline } from '../timeline/Timeline'
import { Volume } from '../volume/Volume'
import './VideoPlayer.css'

export const VideoPlayer = () => {

    const videoRef = useRef()
    const videoControlsRef = useRef()

    let resizeObserver

    useEffect(() => {
        console.log('VideoPlayer::useEffect no deps')
        if(videoRef.current) {
            console.log('add event listeners')
            videoRef.current.addEventListener('mouseover', onMouseOverVideo)
            videoRef.current.addEventListener('mouseout', onMouseOutVideo)
        }
        if(videoRef.current && videoControlsRef.current) {
            initObservePlayer()
        }
        return () => {
            console.log('VideoPlayer::remove event listeners')
            videoRef.current.removeEventListener('mouseover', onMouseOverVideo)
            videoRef.current.removeEventListener('mouseout', onMouseOutVideo)
            resizeObserver && resizeObserver.unobserve(videoRef.current)
        }
    }, [])

    const onMouseOverVideo = () => {
        console.log('mouseover video event listener')
        videoControlsRef.current.classList.add('show')
    }

    const onMouseOutVideo = (evt) => {
        console.log('mouseout video event listener')
        videoControlsRef.current.classList.remove('show')
    }

    const initObservePlayer = () => {
        resizeObserver = new ResizeObserver((entries) => {
            if(!entries.length) return
            const dim = entries[0].borderBoxSize[0]
            const width = dim.inlineSize
            const videoStyle = getComputedStyle(videoRef.current)
            const videoControlsStyle =  videoControlsRef.current.style
            console.log('width', width)
            videoControlsStyle.width = `${width}px`
            console.log('videoStyle.bottom', videoStyle.bottom)
            videoControlsStyle.bottom = `calc(${videoStyle.bottom} - 3rem)`
        })
        resizeObserver.observe(videoRef.current)
    }

    return (
        <div className="video-content">
            <video ref={videoRef} className="player" controls={false}>
                <source src="./sample-video.mp4" type="video/mp4"></source>
                Sorry your browser don't support video
            </video>
            <section ref={videoControlsRef} className="video-controls hidden">
                <Timeline />
                <div className="action-container">
                    <Volume />
                    <PlayPauseButton />
                </div>
            </section>
        </div>
    )
}