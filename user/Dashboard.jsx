import React, { useContext, useEffect, useState } from 'react'
import UserConytext from '../src/Contex/context/UserContext'
import { ThemContex } from '../src/Contex/App'

export default function Dashboard() {

    const them = useContext(ThemContex)
    const [users, setUsers] = useState([])
    const { user, isLogin } = useContext(UserConytext)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    async function getUser() {
        try {
            const respnse = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await respnse.json()
            console.log(data)

        }
        catch {
            console.log('error')
        }
    }

    getUser()

    console.log(users)
    localStorage.setItem('firstName', 'Soheil')
    // console.log(localStorage.setItem)
    console.log(localStorage.getItem('firstName'))
    localStorage.removeItem('firstName')
    return (
        <>
            <div>
                <p>{users.name}</p>
            </div>
            {true && <div style={them}>
                <h2>Dashbord</h2>
                <p>Name : {user.name}</p>
            </div>}
        </>
    )
}

// function Person(name, family) {
//     this.name = name
//     this.lastname = family
// }

// class Car {
//     constructor(name , year , color) {
//         this.name = name
//         this.year = year
//         this.color = color
//     }
//     age () {
//       return `${this.name} was born in ${this.year}`  
//     }
// }

// const car1 = new Car('207' , 2024 , 'Black')


// console.log(car1.name)
// // car1.age()
// console.log((car1.age()))
// console.log(p==Person)

// function berimShomal () {
//     return new Promise((resolve , reject) => {
//         let pool = true
//         if(pool == true) {
//             resolve()
//         }
//         else {
//             reject()
//         }
//     })
// }

// function docharkhe () {
//     return new Promise((resolve , reject) => {
//         let pool = false
//         if(pool ==true) {
//             resolve()
//         }
//         else {
//             reject()
//         }
//     })
// }
// berimShomal()
// .then(() => docharkhe())
// .then(() => console.log('دوچرخه میخرم'))
// .catch(() => console.log(console.log('ERROR')))

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((res) => console.log(res.json()))
//     .then((data) => console.log(data))