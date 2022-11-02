import {useCallback, useEffect, useRef} from 'react'
import {connect, useDispatch} from 'react-redux'
import { PlayPauseButton } from '../playpause/PlayPauseButton'
import { Timeline } from '../timeline/Timeline'
import { Volume } from '../volume/Volume'
import { VideoPlayer } from './VideoPlayer'
import './VideoPlayerContainer.css'

export const VideoPlayerContainerCmp = (props) => {

    console.log('VideoPlayerContainer re-render')

    const dispatch = useDispatch()

    const videoControlsRef = useRef()
    const videoContentRef = useRef()
    let resizeObserver

    useEffect(() => {
        console.log('VideoPlayerContainer::useEffect no deps')
        /*
        // TODO remove comments 
        if(videoContentRef.current) {
            console.log('add event listeners')
            videoContentRef.current.addEventListener('mouseenter', onMouseOverVideo)
            videoContentRef.current.addEventListener('mouseleave', onMouseOutVideo)
        }
        if(videoRef.current && videoControlsRef.current) {
            initObservePlayer()
        }
        return () => {
            console.log('VideoPlayer::remove event listeners')
            videoContentRef.current.removeEventListener('mouseenter', onMouseOverVideo)
            videoContentRef.current.removeEventListener('mouseleave', onMouseOutVideo)
            resizeObserver && resizeObserver.unobserve(videoRef.current)
        }
        */
    }, [])

    /*
    useEffect(() => {
        videoRef.current.duratio
    }, [props.duration])

    useEffect(() => {

    }, [props.currentTime])

    */
   /*
    const onPlayerCanPlayThrough = () => {
        console.log('onPlayerCanPlayThrough, duration', videoRef.current.duration)
    }
/*
    const onPlayerCurrentTimeChange = () => {
        debounce(() => dispatch(setCurrentTime(videoRef.current.currentTime)), 1000)
    }
    */

    const onMouseOverVideo = () => {
        console.log('mouseover video event listener')
        videoControlsRef.current.classList.add('show')
    }

    const onMouseOutVideo = (evt) => {
        console.log('mouseout video event listener')
        videoControlsRef.current.classList.remove('show')
    }

    const handleCurrentTimeChange = useCallback((v) => {
        videoRef.current.currentTime = v
    }, [])

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
        <div className="video-content" ref={videoContentRef}>
            <VideoPlayer />
            <section ref={videoControlsRef} className="video-controls show">
                <Timeline videoRef={videoRef} /* duration={videoRef.current?.duration} currentTime={videoRef.current?.currentTime} */
                            onCurrentTimeChange={handleCurrentTimeChange}/>
                <div className="action-container">
                    <Volume />
                    <PlayPauseButton />
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = ({player: {isPlaying, volume}}, ownProps) => ({
    isPlaying,
    volume,
    ...ownProps
})

export const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayerContainerCmp)