/*
 * @FilePath: index.tsx
 * @Author: chentianyao
 * @Date: 2022-10-28 16:15:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-01 09:48:38
 * Copyright: 2022 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */

import React, { useEffect } from 'react'
import styles from './index.module.css'
interface IButtonModuleProps {
  session: number,
  rest: number
  setSession: React.Dispatch<React.SetStateAction<number>>
  setRest: React.Dispatch<React.SetStateAction<number>>
}

const ButtonModule: React.FC<IButtonModuleProps> = ({
  session,
  rest,
  setSession,
  setRest,
}) => {
  useEffect(() => {
    setSession(30)
    setRest(5)
  }, [])
  const changeSessionValue = (e: any) => {
    if(e.target.value * 1 < 0) {
      setSession(30)
    } else if(e.target.value * 1 > 60) {
      setSession(60)
    } else {
      setSession(e.target.value)
    }
  }
  const changeRestValue = (e: any) => {
    if(e.target.value * 1 < 0) {
      setRest(5)
    } else if(e.target.value * 1 > 30) {
      setRest(30)
    } else {
      setRest(e.target.value)
    }
  }
  return (
    <div className={`${styles.optionsWrapper}`}>
      <div className={`${styles.timeOpt}`}>
        <div className={`${styles.timeWrapper}`}>
          <span>ression</span>
          <input className={`${styles.work}`} type="number" value={session} min={1} max={60} onChange={changeSessionValue}/>
        </div>
        <div className={`${styles.timeWrapper}`}>
          <span>break</span>
          <input className={`${styles.rest}`} type="number" value={rest} min={1} max={60} onChange={changeRestValue}/>
        </div>
      </div>
    </div>
  )
}

export default ButtonModule
