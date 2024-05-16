//LET-CONST-VAR
let value = 0

{
  var age = 28
  const name = 'Oğuzhan'
}

value = "Oğuzhan Varlı"

console.log(value)
console.log(age)


//FONKSİYONLAR
function first(){

} 

const second = () => {}

//VALUE TİPLERİ
//string, number, boolean, array
let sampleString = ""
let sampleString2 = ''
let sampleNumber = 28
let sampleBoolean = true

let sampleArray = ['merhaba', 23, true, [], ['23', 22]]
let sampleObject = {}

let sampleObject2 = {
  key : value,
  personel : "Oğuzhan",
  age : 28,
  hobbies : ['running', 22, 'coding'],
  address : {
    city: 'İstanbul',
    cityCode : 34,
    street : ['Üsküdar', 'Bulgurlu']
  },
  sayHello : () => {
    console.log('Merhaba Javascript. Biz artık Javascript yazacağız')
    return 'Merhaba Javascript'
  }
}

console.log(sampleObject2.personel)
console.log(sampleObject2.address.cityCode)
let selam = sampleObject2.sayHello()

console.log(selam)


//GET İŞLEMİ
app.get("/products", (req,res) => {
  res.send("Burası Products")
})

