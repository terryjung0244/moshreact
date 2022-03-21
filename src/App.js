import React from 'react'

const App = () => {

  // function sayHello() {
  //   for (var i = 0; i < 5; i++) {
  //     console.log(i)
  //   }

  //   console.log(i) //still you can value from i outside of for scope which is 5.
  // }
  // sayHello();
  // //var -> function
  // //let -> block, reassigned variable
  // //const -> block, it can not change, constant

  // //object
  // const person = {
  //   name: 'Terry', 
  //   eat: function() {}, //eat and talk are method
  //   talk() {}
  // };

  // console.log(person.name);

  //The this keyword
  const person = {
    name: 'Terry',
    eat() {
      console.log(this);
    }
  };

  person.eat();
  const eat = person.eat.bind(person);
  eat();

  return (
    <div>
      App
    </div>
  )
}

export default App
