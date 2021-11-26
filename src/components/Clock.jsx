import { useEffect, useState } from "react";

const Clock = () => {
    
    const [time, setTime] = useState()

    const nowTime = () => {
        let date = new Date().toLocaleTimeString()
        setTime(date)
    }
    
    useEffect(() => {
        setInterval(nowTime, 1000)
    }, [])


    return (
        <div className="date">
            <p>{time}</p>
        </div>
    )
}

export default Clock