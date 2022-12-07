// alert("Hello Diksha")
// console.log("Hello Diksha")
//---------------------------------------------------------
//Implicit coercion:
console.log('A' - 1);//NaN
console.log('A' + 1);//A1
console.log(2 + '2' + '2');//222
console.log('hello' + 'world' + 89);//helloworld89
console.log('hello' - 'world' + 89);//NaN
console.log('hello' + 78);//hello78
console.log('78' - 90 + '2');//NaN
console.log(2 - '2' + 90);//NaN
console.log(89 - '90' / 2);//NaN
console.log(2+ '2' + null);//220
console.log((true == false) > 2);//false
console.log((89  + 'hello' + 90 / 9));//89hello10

//---------------------------------------------------------
//Datatypes:
var a="gfuh ieiuei";
console.log(a.slice(0,5));

var b="hduej dij";
console.log(b.length)
console.log(b.toUpperCase())

var c=" ASDR JBUJ  "
console.log(c.toLowerCase())
var d=" biji jdo "
console.log(d.trim());
console.log(d.replace("j",","))

console.log(44+"Hello"+20/2+22)//44Hello1022
console.log("66"/2 +"hii"+"null"+ null)//33hiinullnull
console.log("66"/2 + null+"hii"+"null")//33hiinull

var car ={
    name:"Maruti"
    
}