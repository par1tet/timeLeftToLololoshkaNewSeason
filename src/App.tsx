import { useEffect, useState } from "react"

function App() {
    // Целевая дата (например, 31 декабря 2024 года, 23:59:59)
    const targetDate: Date = new Date('2024-08-23T15:00:00');
    const now = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    const [seconds, setSeconds] = useState(Math.floor(difference / 1000 % 60))
    const [minutes, setMinutes] = useState(Math.floor(difference / 1000 / 60 % 60))
    const [hours, setHours] = useState(Math.floor(difference / 1000 / 60 / 60 % 24))
    const [days, setDays] = useState(Math.floor(difference / 1000 / 60 / 60/ 24))
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const difference: number = targetDate.getTime() - now.getTime()
      setSeconds(Math.floor(difference / 1000 % 60))
      setMinutes(Math.floor(difference / 1000 / 60 % 60))
      setHours(Math.floor(difference / 1000 / 60 / 60 % 24))
      setDays(Math.floor(difference / 1000 / 60 / 60 / 24))
    }, 1000)
  }, [])
  return (
    <>
      <div className='timeleft'>
        {`${days}дн. ${hours}ч. ${minutes}мин. ${seconds}с.`}
      </div>
      <span className="info">предполагаемая дата 23 августа представленная EDIT`ом, есле вдруг окажеться это не правда, то не бейте меня, а скорее эдита</span>
      <span className="aboutme">если че вдруг, пишете тг юз @faebfe</span>
    </>
  )
}

export default App
