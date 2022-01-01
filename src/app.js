import React, { useContext } from 'react'
import { AppContext } from 'context'

import SelectScreen from './pages/select'
import RecordScreen from './pages/record'
import PlayScreen from './pages/play'

import Mic from './pages/mic-with-fx'
import FileUpload from './pages/file-upload'

const App = () => {
  const { screen } = useContext(AppContext)

  // return <FileUpload />
  // return <Mic />

  // Select track screen
  if (screen === 1) {
    return <SelectScreen />
  }

  // Record screen
  if (screen === 2) {
    return <RecordScreen withFx={window.location.pathname === '/fx'} />
  }

  // Play/download screen
  if (screen === 3) {
    return <PlayScreen />
  }
}

export default App