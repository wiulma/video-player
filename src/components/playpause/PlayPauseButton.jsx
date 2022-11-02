import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { startPlaying, stopPlaying } from "../../store/features/PlayerSlice"

import './PlayPauseButton.css'

export const PlayPauseButton = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('re-render play/pause button component')
    }, [])

    useEffect(() => {
        console.log('notify player isPlaying', isPlaying)
        dispatch(isPlaying ? startPlaying() : stopPlaying())
    },[isPlaying])

    return (
        <div className="action-play-container">
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    )
}