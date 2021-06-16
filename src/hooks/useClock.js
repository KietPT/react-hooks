import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const newTimeString = dayjs(now).format('YYYY-MM-DDTHH:mm:ss SSS [Z] A')
            setTimeString(newTimeString)
        }, 1000)
        return () =>{
            console.log('caca')
            clearInterval(interval)
        }
    }, []);
    return {timeString}
}
