// let stdName="122"
// stdName=223
// stdName="ABC"
// let std:string=123
// let flag:boolean=true
// console.log(flag)
// let names:string[]=["Sameer","Talha","Mudassir"]
// console.log(names)
// let stdData:[string,number,string]=["Mudasir",129,"2210B1"]
// console.log(stdData)
// type obj={
//     name:string,
//     age:number,
//     address:string,
//     email?:string
// }
// const data:obj={
// name:"Mudassir",
// age:29,
// address:"Dhaka"
// }
// console.log(data)
// let num1=prompt("Enter a number")
// let num2=prompt("Enter a number")
// function add():number{
//     return Number(num1)+Number(num2)
// }
// function sub():number{
//     return Number(num1)-Number(num2)
// }
// function mul():number{
//     return Number(num1)*Number(num2)
// }
// function div():number{
//     return Number(num1)/Number(num2)
// }
// let addition=add()
// let subtraction=sub()
// let multiplication=mul()
// let division=div()
// console.log(addition)
// console.log(subtraction)
// console.log(multiplication)
// console.log(division)
// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// getDetails(){
//     console.log(`My name is ${this.name} and my age is ${this.age}`)
// }
// }
// class Student extends Person{
//     roll:number
//     constructor(name:string,age:number,roll:number){
//         super(name,age)
//         this.roll=roll
//     }
//     getDetails(){
//         super.getDetails()
//         console.log(`My roll is ${this.roll}`)
//     }
// }
// const s1=new Student("Talha",20,12589)
// console.log(s1)
// abstract class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//    abstract getDetails()
// }
// class Student extends Person{
//     roll:number
//     constructor(name:string,age:number,roll:number){
//         super(name,age)
//         this.roll=roll
//     }
// }
// const s1=new Student("Talha",20,129)
// s1.getDetails()
// abstract class Vehicle{
//   abstract  name:string
//     type:string
//  transmission:string
//  constructor(type,transmission){
//     this.type=type 
//     this.transmission=transmission
//  }
// abstract getDetails()
// }
// class Car extends Vehicle{
//     name:string
//     type: string
//     transmission:string
//     constructor(name:string,type: string,transmission:string){
// super(type,transmission)
// this.name=name
//     }
//     getDetails(){
//         console.log(this.name,this.type,this.transmission)
//     }
// }
// const s1=new Car("Mehran","Pakistani","Manual")
// s1.getDetails()
