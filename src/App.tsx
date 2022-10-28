import React from 'react';
import styles from './layout/index.module.css'
import DisplayModule from './components/display/index'
import ButtonModule from './components/button/index'

const App: React.FC = () => {
  return (
    <>
      <div className={`${styles.bg}`}>
        <DisplayModule />
        <ButtonModule />
      </div>
    </>
  )
}
export default App;
