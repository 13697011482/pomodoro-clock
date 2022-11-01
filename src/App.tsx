import React, { useState } from 'react';
import styles from './layout/index.module.css'
import DisplayModule from './components/display/index'
import ButtonModule from './components/button/index'

const App: React.FC = () => {
  const [session, setSession] = useState<number>(30)
  const [rest, setRest] = useState<number>(5)
  const [status, setStatus] = useState<string>('stop')
  const [isPause, setIsPause] = useState<boolean>(false)
  const [isClean, setIsClean] = useState<boolean>(false)
  return (
    <>
      <div className={`${styles.bg}`}>
        <DisplayModule 
          session={session} 
          rest={rest} 
          status={status} 
          setStatus={setStatus} 
          setIsPause={setIsPause} 
          isPause={isPause} 
          isClean={isClean} 
          setIsClean={setIsClean}/>
        {
          status == 'stop' ? (
            <ButtonModule 
              session={session} 
              rest={rest} 
              setSession={setSession} 
              setRest={setRest} />
          ) : ''
        }
      </div>
    </>
  )
}
export default App;
