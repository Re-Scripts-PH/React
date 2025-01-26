import { useState,useRef } from 'react'

// test
import Button from './components/ui/Button.tsx'
import Input from './components/ui/Input.tsx'
import Container from './components/ui/Container.tsx'
import Form, { FormHandle } from './components/ui/Form.tsx'

import AddTimer from './components/AddTimer.tsx'
import Timers from './components/Timers.tsx'
import Header from './components/Header.tsx'


import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </div>
  )
}

export default App
