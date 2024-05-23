import React from 'react'
import Header from './components/Header'
import Main from "./components/Main"
import Footer from './components/Footer'
import PropSample from './samples/PropSample'
import UseStateSample from './samples/UseStateSample'
import CounterSample from './samples/CounterSample'
import ServiceSample from './samples/ServiceSample'

function App() {

  return (
    <>
      {/* <PropSample /> */}
      {/* <UseStateSample /> */}
      {/* <CounterSample /> */}
      <ServiceSample/>
    </>
  )
}

export default App