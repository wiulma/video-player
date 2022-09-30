import { useEffect, useState } from "react"

export const Timeline = () => {

    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        console.log('notify new current time', currentTime)
    }, [currentTime])

    const calcCurrentTime = () => {
        const calcNewCurrentTime = (new Date()).getMilliseconds()
        setCurrentTime(calcNewCurrentTime)
    }

    return (
        <div className="timeline" onClick={() => calcCurrentTime()}></div>
    )
}