import React from 'react'

function Header(prop) {
  console.log(prop.yazi)
  return (
    <h1>{prop.yazi}</h1>
  )
}

export default Header