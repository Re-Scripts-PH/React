import { useState,useRef } from 'react'

// test
import Button from './components/ui/Button.tsx'
import Input from './components/ui/Input.tsx'
import Container from './components/ui/Container.tsx'
import Form, { FormHandle } from './components/ui/Form.tsx'

import AddTimer from './components/AddTimer.tsx'
import Timers from './components/Timers.tsx'
import Header from './components/Header.tsx'
import TimersConstextProvider from './store/timers-context.tsx'

import './App.css'

function App() {
  return (
    <TimersConstextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersConstextProvider>
  )
}

export default App
