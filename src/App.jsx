
import React, { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import LoadingPage from './pages/LoadingPage'
import NavigationPage from './pages/NavigationPage'
import NavWithTask from './pages/NavWithTask'
function App() {
    const [page, setPage] = useState('home')
    const [hiddenLoadin, setHiddenloading] = useState(true)
    const sP = (p) => {
        setHiddenloading(true)
        setTimeout(() => {
            setPage(p)
            setHiddenloading(false)
        }, 1000)
    }
  return (
    <>
    {
      <LoadingPage setPage={sP} hidden={hiddenLoadin} />
    }
    { !hiddenLoadin&& (page === 'home')? <HomePage setHiddenloading={setHiddenloading} setPage={sP} />: null}
    { !hiddenLoadin&& (page === 'chat')? <ChatPage setHiddenloading={setHiddenloading} setPage={sP} />: null}
    { !hiddenLoadin&& (page === 'nav')? <NavigationPage setHiddenloading={setHiddenloading} setPage={sP} />: null}
    { !hiddenLoadin&& (page === 'navT')? <NavWithTask setHiddenloading={setHiddenloading} setPage={sP} />: null}
    </>
  )
}

export default App
