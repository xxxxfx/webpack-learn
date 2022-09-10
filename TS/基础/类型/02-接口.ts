interface IPerson {
  firstName: string,
  lastName: string,
  sayHi: ()=> string
}
var cusomer: IPerson = {
  firstName: 'hello',
  lastName: 'word',
  sayHi: ():string => {return 'test'}
}
console.log(cusomer.firstName)