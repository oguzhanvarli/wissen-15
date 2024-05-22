import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function PropSample() {

  let headerText = "Merhaba Header.Ben Parent Component'in PropSample.js den gelen bir yazıyım."
  let mainText = "Merhaba Main.Ben Parent Component'in PropSample.js den gelen bir yazıyım."
  let footerText = "Merhaba Footer.Ben Parent Component'in PropSample.js den gelen bir yazıyım."

  return (
    <>
      <Header yazi={headerText} />
      <Main yazi2={mainText}></Main>
      <Footer footerText={footerText} myAge={28} />
    </>
  )
}

export default PropSample