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
console.log('78' - 90 + '2');//-122
console.log(2 - '2' + 90);//NaN
console.log(89 - '90' / 2);//NaN
console.log(2+ '2' + null);//22null
console.log((true == false) > 2);//false
console.log((89  + 'hello' + 90 / 9));//89hello10

//---------------------------------------------------------
//Datatypes:
//•	extract first five letters from a string (' gfuh ieiuei ')
var a="gfuh ieiuei";
console.log(a.slice(0,5));

//•	get the length of a string and make it uppercase ('hduej dij')
var b="hduej dij";
console.log(b.length);
console.log(b.toUpperCase());

//•	take a string, make it lowercase and trim it ('   biji jdo   ')
var c=" ASDR JBUJ  ";
console.log(c.toLowerCase());
var d=" biji jdo ";
console.log(d.trim());

//•	replace specified word in a string ('', '')
console.log(d.replace("j",","));

//•	random statements in implicit coercion e.g. (89  + 'hello' + 90 / 9)
console.log(44+"Hello"+20/2+22);//44Hello1022
console.log("66"/2 +"hii"+"null"+ null);//33hiinullnull
console.log("66"/2 + null+"hii"+"null");//33hiinull

//•	create an object for car.
var car ={
    name:"Maruti",
    color:"black",
    year:"2018",
    price:"250000",
    isAvailabel:true
}
console.log(car);
console.log(typeof car);
console.log(car.color);
console.log(Object.keys(car));
console.log(Object.values(car));


//•	revise type of each datatype
