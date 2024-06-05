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
// app.get("/products", (req,res) => {
//   res.send("Burası Products")
// })


//OPERATORS

let sayi1 = 10
let sayi2 = "10"


if(sayi1 === sayi2){
  console.log("Sayılar Eşit")
}else{
  console.log('Sayılar Eşit Değil')
}




let value1 = "1"
let value2 = true

if(value1 == value2){
  console.log("Boolean Değerler Eşit")
}else{
  console.log('Boolean Değerler Eşit Değil')
}


let array1 = []

if(array1){
  //Boş array Buraya girer
  console.log('Array Burada')
}else{
  console.log("Hayır Array Burada -Else")
}

let null1 = null

if(null1){
  console.log('Null Burada')
}else{
  //Null değeri buraya Düşer
  console.log("Hayır Null Burada -Else")
}

let object1 = {}

if(object1){
  //Boş object buraya girer
  console.log('Object Burada')
}else{
  console.log("Hayır Object Burada -Else")
}

// let undefined1;
let undefined1 = undefined

if(undefined1){
  console.log('Undefined Burada')
}else{
  //Undefined else düşer
  console.log("Hayır Undefined Burada -Else")
}



//SPREAD OPERATÖRÜ
let arraySpread = ["asd", "fgh", 1, 2,3,4,5]
console.log(arraySpread)


let objectSpread = {
  name: "Oğuzhan",
  surname: "Varlı",
  age: 28,
  city: "İstanbul",
  title: "Teacher"
}
let objectInArray = [
  {
    city: "İstanbul",
    code: "34"
  },
  {
    city: "Ankara",
    code: "06"
  }
]

// let newArray = arraySpread.push('yeni')
// let newArray = [arraySpread, "yeni"]
let newArray = [...arraySpread, "yeni"]
console.log(newArray)

// let newObject = {objectSpread, age:29 }
let newObject = {...objectSpread, age: 29, city: "London"}
console.log(newObject)

let myNewData = {city: "İzmir", code: "35"}
let newobjectInArray = [...objectInArray, myNewData]
console.log(newobjectInArray)


