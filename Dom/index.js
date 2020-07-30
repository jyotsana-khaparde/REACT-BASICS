import React from 'react'// This liburary enabled JSX to work the way it suppose to work(it use to interpret JSX)
import ReactDOM from 'react-dom'
/**
 * JSX -> javascript rendition or version of html
 * (everythiing is getting complie down to a plane javascript version of itself)
 */

// ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'))
let myNewPara = document.createElement('p')
myNewPara.innerHTML = 'This is a program'