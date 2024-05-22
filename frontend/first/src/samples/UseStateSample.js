import React, { useState } from 'react'

function UseStateSample() {
  //let name = "Oğuzhan"

  const[fullName, setFullName] = useState("Oğuzhan")

  const handleName = () => {
    //name = "Oğuzhan Varlı"
    //console.log(name)
    //fullName = "Oğuzhan Varlı"  //Bu ifade yanlıştır çünkü readonly bir değere atama yapıyoruz
    setFullName("Oğuzhan Varlı")

  }

  const handleName2 = () => {
    //Bu yazım şekliyle aşağıdaki aynıdır.

    // if(fullName === "Oğuzhan"){
    //   setFullName("Oğuzhan Varlı")
    // }else{
    //   setFullName("Oğuzhan")
    // }

    fullName === "Oğuzhan" ? setFullName("Oğuzhan Varlı") : setFullName("Oğuzhan")
    
  }

  return (
    <div>
      <h1>{fullName}</h1>
      <button onClick={handleName}>Change Name</button>
      <button onClick={handleName2}>Change Name2</button>
    </div>
  )
}

export default UseStateSample