import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import { Routes } from 'app/components/Routes'
import { theme } from 'theme'

export const App = ({ initApp, appReady }) => {
  useEffect(() => {
    initApp()
  }, [initApp])

  return (
    <ThemeProvider theme={theme}>
      {
        appReady &&
          <>
            <Routes />
            <ToastContainer />
          </>
      }
    </ThemeProvider>
  )
}
