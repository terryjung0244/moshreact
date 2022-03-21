import React from 'react'

const App = () => {

  function sayHello() {
    for (var i = 0; i < 5; i++) {
      console.log(i)
    }

    console.log(i) //still you can value from i outside of for scope which is 5.
  }

  //var -> function
  //let -> block, reassigned variable
  //const -> block, it can not change, constant

  return (
    <div>
      App
    </div>
  )
}

export default App
