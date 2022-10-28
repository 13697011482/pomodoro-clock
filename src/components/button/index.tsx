/*
 * @FilePath: index.tsx
 * @Author: chentianyao
 * @Date: 2022-10-28 16:15:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-28 16:42:49
 * Copyright: 2022 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */

import React from 'react'
import styles from './index.module.css'
const ButtonModule: React.FC = () => {
  return (
    <div className={`${styles.optionsWrapper}`}>
      <div className={`${styles.timeOpt}`}>
        <div className={`${styles.timeWrapper}`}>
          <span>ression</span>
          <input className={`${styles.work}`} type="number" value="30" min={1} max={60}/>
        </div>
        <div className={`${styles.timeWrapper}`}>
          <span>break</span>
          <input className={`${styles.rest}`} type="number" value="30" min={1} max={60}/>
        </div>
      </div>
      <div className={`${styles.operation}`}>
        <div>pause</div>
        <div>clean</div>
      </div>
    </div>
  )
}

export default ButtonModule
