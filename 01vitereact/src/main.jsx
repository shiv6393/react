import React from 'react'
import ReactDom from 'react-dom/client' // ✅ Fixed: D should be capital
//import App from './App.jsx'
function App(){// can be written directly function instead of App.jsx but we write so for best practice
  //in .js file firstLetter should be capital letter
  return (
    <>
<h1>this functon will return a single element or tag but we can write multiple by writingnested tag</h1>
<h2>like me i  am written in h2</h2>
    </>
  )
}

ReactDom.createRoot(document.getElementById('root')).render(
  < React.StrictMode>
    <App />
  </React.StrictMode>,
)
// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )

// const anotherUser = "chai aur react"

// const reactElement = React.createElement(
//     'a',
//     {href: 'https://google.com',target: '_blank' },
//     'click me to visit google',
//     anotherElement
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
 
//     anotherElement
  
// )
