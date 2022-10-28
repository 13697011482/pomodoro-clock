/*
 * @FilePath: index.tsx
 * @Author: chentianyao
 * @Date: 2022-10-28 15:49:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-28 16:10:18
 * Copyright: 2022 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
import React from 'react'
import styles from './index.module.css'

const displayModule: React.FC = () => {
  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.timer}`}>
        <span className={`${styles.title}`}>Ready ?</span>
        <div className={`${styles.countdown}`}>
          <div className="minutes">30:</div>
          <div className="second">30</div>
        </div>
        <div className={`${styles.start}`}>start</div>
      </div>
    </div>
  )
}
export default displayModule