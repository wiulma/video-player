import React, { useEffect, useRef, useState } from "react"

import './Timeline.css'

export const Timeline = ({/*duration, currentTime,*/ videoRef, onCurrentTimeChange}) => {

    if(!videoRef || !videoRef.current) return null

    console.log('Timeline::create Timeline component')

    const [duration, setDuration] = useState(videoRef.current?.duration ?? 0)
    const [currentTime, setCurrentTime] = useState(0)

    const progressRef = useRef()

    useEffect(() => {
        console.log('Timeline::new duration', videoRef.current?.duration)
        setDuration(videoRef.current?.duration)
    }, [videoRef.current?.duration])

    useEffect(() => {
        console.log('Timeline::new videoref', videoRef.current)
        if(videoRef.current) {
            videoRef.current.addEventListener('Timelinecurrenttime', onCurrentTimeUpdate)
            return () => {
                console.log('Timeline::remove currenttime listeners')
                videoRef.current.removeEventListener('currenttime', onCurrentTimeUpdate)
            }
        }
    }, [videoRef.current])

    const onCurrentTimeUpdate = () => {
        console.log('Timeline::current time update', videoRef.current.currentTime)
    }

    /*
    useEffect(() => {
        console.log('notify new total time', duration)
    }, [duration])


    useEffect(() => {
        console.log('notify new current time', currentTime)
    }, [currentTime])
*/

    useEffect(() => {
        console.log('Timeline::render Timeline component', duration, currentTime)
    },[])

    const onChangeCurrentTime = () => {
        // TODO
        console.log('Timeline::calculate new current time based on click event on timeline', progressRef.current.value)
    //    dispatch(setCurrentTime(calcNewCurrentTime))
        if(progressRef.current?.value) {
            onCurrentTimeChange(progressRef.current.value)
        }
    }

    if(!currentTime || !duration) return null

    return (
        <div className="timeline">
            <div className="timer-container">
                <span>{currentTime}</span>
                <span>/</span>
                <span>{duration}</span>
            </div>
            <div className="progress-container">
                <progress ref={progressRef} value={currentTime} max={duration} onChange={onChangeCurrentTime}>{currentTime}</progress>
            </div>
        </div>
    )
}
