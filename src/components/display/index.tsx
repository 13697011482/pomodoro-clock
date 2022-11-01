/*
 * @FilePath: index.tsx
 * @Author: chentianyao
 * @Date: 2022-10-28 15:49:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-01 09:50:12
 * Copyright: 2022 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
interface IDisplayModuleProps {
  session: number,
  rest: number,
  status: string,
  setStatus: React.Dispatch<React.SetStateAction<string>>
  isPause: boolean
  isClean: boolean
  setIsPause: React.Dispatch<React.SetStateAction<boolean>>
  setIsClean: React.Dispatch<React.SetStateAction<boolean>>
}

const DisplayModule: React.FC<IDisplayModuleProps> = ({
  session = 30,
  rest = 5,
  status,
  setStatus,
  isPause,
  isClean,
  setIsPause,
  setIsClean
}) => {
  const [minute, setMinute] = useState<string>('')
  const [second, setSecond] = useState<string>('')
  const [pauseTime, setPauseTime] = useState<number>(0)
  const timer = useRef<any>(null)
  const [type, setType] = useState<string>('session')
  const handleStart = () => {
    if(status === 'running') return
    setStatus('running')
    if(isPause) {
      dealTime(pauseTime, type === 'session' ? 'session' : 'rest')
    } else {
      dealTime(session * 60, 'session')
    }
    setIsPause(false)
    setIsClean(false)
  }
  const dealTime = (time: number, type: string) => {
    if(time < 0) {
      setType(type ==='session' ? 'rest' : 'session')
      timer.current && clearTimeout(timer.current)
      type ==='session' ? dealTime(rest * 60, 'rest') : dealTime(session * 60, 'ression')
      return
    }
    const { minute, second } = calcTime(time)
    setMinute(minute)
    setSecond(second)
    time -= 10
    setPauseTime(time)
    timer.current = setTimeout(() => {
      dealTime(time, type ==='session' ? 'session' : 'rest')
    }, 1000)
  }

  const calcTime = (time: number) => {
    const minute = Math.floor(time / 60).toString().padStart(2, '0')
    const second = (time % 60).toString().padStart(2, '0')
    return {
      minute, second
    }
  } 
  const countDownInit = () => {
    setStatus('stop')
    setIsPause(false)
    setType('session')
    setPauseTime(0)
  }
  useEffect(() => {
      const { minute, second } = calcTime(session * 60)
      setMinute(minute)
      setSecond(second)
      countDownInit()
      return () => {
        timer.current && clearTimeout(timer.current)
      }
  }, [session, rest])

  useEffect(() => {
    if(isClean) {
      setStatus('stop')
      const { minute, second } = calcTime(session * 60)
      setMinute(minute)
      setSecond(second)
      countDownInit()
      timer.current && clearTimeout(timer.current)
    }
  }, [isClean])
  
  useEffect(() => {
    if(isPause) {
      setStatus('paused')
      timer.current && clearTimeout(timer.current)
    }
  }, [isPause])

  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.timer}`}>
        <span className={`${styles.title}`}>{status === 'stop' ? 'Ready ?' : isPause ? 'paused' : type}</span>
          <div className={`${styles.countdown}`}>
            <div className="minutes">{ minute }:</div>
            <div className="second">{ second }</div>
          </div>
          {
            status !== 'running' && (<div className={`${styles.button}`} onClick={handleStart}>start</div>)
          }
          {
            status === 'running' && (<div className={`${styles.button}`} onClick={() => setIsPause(true)}>pause</div>)
          }
          {
            status !== 'stop' && (<div className={`${styles.button}`} onClick={() => setIsClean(true)}>reset</div>)
          }
      </div>
    </div>
  )
}
export default DisplayModule