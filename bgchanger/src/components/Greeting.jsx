import React from 'react'
import useTheme from '../context/theme'

function Greeting() {
  const { themeMode, darkTheme, lightTheme } = useTheme()

  const handleClick = () => {
    if (themeMode === "light") darkTheme()
    else lightTheme()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-white text-black
                    dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">Hello Everyone</h1>
      <button
        onClick={handleClick}
        className="mt-6 px-4 py-2 rounded
                   bg-gray-200 text-black
                   dark:bg-gray-700 dark:text-white"
      >
        Change Mode
      </button>
    </div>
  )
}

export default Greeting
