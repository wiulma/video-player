import { useEffect, useState } from "react"

import './PlayPauseButton.css'

export const PlayPauseButton = () => {

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        console.log('notify player isPlaying', isPlaying)
    },[isPlaying])

    return (
        <div className="action-container">
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    )
}