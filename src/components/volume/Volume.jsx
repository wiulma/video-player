import { useState, useEffect  } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {connect, useDispatch} from 'react-redux'
import { setVolume } from "../../store/features/PlayerSlice"

import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

import './Volume.css'

const VolumeCmp = ({volume}) => {

    // const volumeRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('re-render volume component')
    }, [])
/*
    useEffect(() => {
        console.log('notify volume changes', volume)
        dispatch(setVolume(volume))
    }, [volume])
    */

    function onVolumeChange(evt) {
        console.log('notify volume changes', evt)
        dispatch(setVolume(evt.target.value))
    }

    return (
        <div className="volume-container">
            <FontAwesomeIcon icon={faVolumeHigh} className="fa-lg" color="#ffffff" />
            <input type="range" max="1" min="0" step=".1" value={volume} onChange={onVolumeChange}/>
        </div>
    )
}

const mapStateToProps = ({player:{volume}}) => (
    {
        volume
    }
)

export const Volume = connect(mapStateToProps)(VolumeCmp)