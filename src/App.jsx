
import React, { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import LoadingPage from './pages/LoadingPage'
import NavigationPage from './pages/NavigationPage'
import NavWithTask from './pages/NavWithTask'
function App() {
    const [page, setPage] = useState('home')
    const [showLoading, setShowLoading] = useState(false)
    const sP = (p) => {
        setShowLoading(true)
        setTimeout(() => {
            setPage(p)
            setShowLoading(false)
        }, 1000)
    }
  return (
    <>
    {
      showLoading?<LoadingPage setPage={sP} />:null
    }
    { !showLoading&& (page === 'home')? <HomePage setPage={sP} />: null}
    { !showLoading&& (page === 'chat')? <ChatPage setPage={sP} />: null}
    { !showLoading&& (page === 'loading')? <LoadingPage setPage={sP} />: null}
    { !showLoading&& (page === 'nav')? <NavigationPage setPage={sP} />: null}
    { !showLoading&& (page === 'navT')? <NavWithTask setPage={sP} />: null}
    </>
  )
}

export default App
