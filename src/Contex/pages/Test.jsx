import React, { lazy, Suspense, useContext, useEffect, useRef, useState } from 'react'
import userInfo from '../context/userInfo'
import UserInfo from '../context/UserContext'
import Family from '../components/Family'

// const Heavy = lazy(() => import('./Harchi')) 
export default function Test() {

    const numm = useContext(UserInfo)
    const [state, setState] = useState(numm)
    const [users, setUSers] = useState([
        {
            name: 'Soheil',
            lastname: 'Rostami',
            id: 1
        },
        {
            name: 'Sofia',
            lastname: 'Rostami',
            id: 2
        },
        {
            name: 'Kasra',
            lastname: 'Rostami',
            id: 3
        }


    ])

    console.log(numm)
    const myInput = useRef(null)


    // const numm = userInfo

    useEffect(() => {
        myInput.current.focus()
    }, [])
    // const [value, setValue] = useState('')
    // const [lists, setLists] = useState([])

    // function clickHandler (e) {
    //     setMount(!mount)
    // }
    // console.log(todos)

    // const clickHandler = (e) => {
    //     e.preventDefault()
    //     // console.log(todos)
    //     setLists(p => ([...p, todos]))
    //     setTodos('')
    //     console.log(lists)
    // }
    return (
        <div>

            <input type="text" ref={myInput} />
            <h1>{state}</h1>
            <button onClick={() => setState(state + 1)}>+</button>

            <ul>
                {
                    users.map((i) => (
                        <Family key={i.id} name={i.name} lastname={i.lastname} />
                    ))
                }
            </ul>






            {/* <span onClick={clickHandler}> click</span>
            {mount ? <p>{value}</p> : <input onChange={(e) => setValue(e.target.value)} value={value}></input>} */}


            {/* <h1>ToDoList</h1>
            <form onSubmit={clickHandler}>
                <input onChange={(e) => setTodos(e.target.value)} type="text" value={todos} />
                <button type='submit'>Add To do</button>
            </form>

            <ol>
                {lists.map((list) => (
                    <li>
                        {list}
                    </li>
                ))}
            </ol> */}




            {/* <button onClick={() => setMount(!mount)}>{!mount ? 'Mount' : 'UnMount'}</button>
        {mount ? <h2>it is Test Page</h2> : 
        users.map((user) => (
            <div key={user.id}>
                <li>{user.name}</li>
            </div>
        ))
        } */}

        </div>
    )
}
