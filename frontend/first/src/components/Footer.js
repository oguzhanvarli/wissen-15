import React from 'react'

function Footer({ footerText, myAge }) {
  return (
    <div css={{borderColor: "red", borderWidth: 2}}>
      <h1>{footerText}</h1>
      <h1>{myAge}</h1>
    </div>
  )
}

export default Footer