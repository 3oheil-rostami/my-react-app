import React, { createContext, useContext, useState } from 'react'
import ProductManger from '../context/ProductManger'


export default function Prodcut() {
  const { numm, setNumm } = useContext(ProductManger)

  const [state, setState] = useState(true)

  const increase = () => setNumm(numm + 1)
  const decrease = () => setNumm(numm - 1)

  const categories = [
    {
      title: "Fruits",
      items: ["Apple", "Banana"]
    },
    {
      title: "Veggies",
      items: ["Tomato", "Potato"]
    }
  ];

  const numbers = [
    [1,2,3],
    [4,5,6],
    // [7,8,9]
  ] 
  const adad = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
  ]
  const newAdad = adad.flat()

  // const zoj = []
  // const fard = []

  // newAdad.map((add) => (
  //   add%2==0 ? zoj.push(add) : fard.push(add)
  // ))


  // farrd(9)

  // const newArray = numbers.flat()

  // console.log(newArray)
  // let total = 0;

  // newArray.map((n) => (
  //   total += n
  // ))

  // numbers.map((num , i) => (
  //   console.log(num[i])
  //   // total += num[i]
  // ))
  // console.log(total)
  return (
    <div>
      <div>
        {categories.map(cat => (
          <div key={cat.title}>
            <h3>{cat.title}</h3>
            {cat.items.map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => setState(!state)}>{state ? 'mount' : 'unmount'}</button>


      {state ? <div>
        {`state is ${state}`}
      </div> : ''}
      {
        state && <SayHi />
      }
      <h1>Product  : {numm}</h1>
      <button onClick={increase}>+</button>______
      <button onClick={decrease}>-</button>
    </div>
  )
}
function SayHi() {
  return (
    <h2>Hi</h2>
  )
}

// <div>
//   <h2>Prodcut</h2>
//   <h2>{num}</h2>
//   <button onClick={() => setNum(num + 1)}>+</button>
//   <button onClick={() => setNum(num - 1)}>-</button>
// </div>