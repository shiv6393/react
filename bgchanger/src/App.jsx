import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Greeting from './components/Greeting'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  function darkTheme() {
    setThemeMode("dark")
  }

  function lightTheme() {
    setThemeMode("light")
  }

  // Apply theme to <html> tag
  useEffect(() => {
    const elm = document.querySelector('html')
    elm.classList.remove("light", "dark")
    elm.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Greeting />
    </ThemeProvider>
  )
}

export default App
