import { useState, useEffect  } from "react"

import './Volume.css'

export const Volume = () => {

    const [volume, setVolume] = useState(5)

    useEffect(() => {
        console.log('notify volume changes', volume)
    }, [volume])
    return (
        <div className="volume-container">
            <button onClick={() => setVolume(volume + 1)}>+</button>
            <button onClick={() => setVolume(volume - 1)}>-</button>
        </div>
    )
}