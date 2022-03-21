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
  // const person = {
  //   name: 'Terry',
  //   eat() {
  //     console.log(this);
  //   }
  // };

  // person.eat();
  // const eat = person.eat.bind(person);
  // eat();

  //arrow function
  const square = function (number) { //function
    return number * number;
  }

  const square2 = number => {
    return number * number;
  }

  const square3 = number => number * number;
  console.log(square3(3));

  //example of useful way to use an arrow function
  const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
  ]

  const activejobs = jobs.filter(function(job) { return job.isActive});
  console.log(activejobs);
  const activejobs2 = jobs.filter(job => job.isActive);
  console.log(activejobs2);


  return (
    <div>
      App
    </div>
  )
}

export default App
