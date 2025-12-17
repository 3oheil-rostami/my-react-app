import { useContext, useEffect, useState } from 'react'
import ScoreUser from '../context/ScoreUser'
import Pass from '../components/Pass'
import axios from 'axios'
import { data } from 'react-router-dom'
import request from '../tools/request'
export default function Harchi() {
    const [show, setShow] = useState(false)
    const [mount, setMount] = useState(false)
    const [user, setUser] = useState([])
    const [faild, setFaild] = useState('')
    const [inp, setInp] = useState('')
    const [fil, setFil] = useState('')
    const [filterName, setFilterName] = useState('')
    const [valueInp, setValueInp] = useState('')
    const [value, setValue] = useState(1)
    const [num, setNum] = useState([1, 2, 3])
    const [selected, setSelected] = useState([]);

    const name = 'Soheils'
    const score = useContext(ScoreUser)
    // console.log(score) 

    function requestt() {
        request('/users/3')
            .then(({ data }) => setUser(data))
    }
    const clickHandler = function () {
        setMount(true)

        if (inp > 18) {
            alert('Mojaz')
        }
        else {
            alert('Mojaz nist')
        }
    }

    useEffect(() => {
        requestt()
    }, [])

    // let numbers = [1,2,3,4,5]

    // function toFar (c) {
    //    let f = 9/5 * c + 32
    //     console.log(f)
    // }
    // toFar(1)
    // toFar(25)

    // function counter () {
    //     let x = 0;
    //     return () => ++x;
    // }

    // const c = counter()
    // console.log(c())
    // console.log(c() )

    // const userID = {
    //     name: 'Soheil',
    //     lastName: 'Rostami',
    //     abilit: function () {
    //         return 'coding..'
    //     },
    //     fullName(namee) {
    //         return namee + ' ' + this.lastName
    //     }
    // }

    // const obj2 = userID

    // const array1 = [1, 2, 3]
    // const newArray = []

    // const names = ['Soheil' , 'Sobhan' , 'Sofia']
    // const newName = []

    // names.map((item) => {
    //     if(item.length >5) {
    //         newName.push(item)
    //     }
    // })
    // const newName = names.filter((i) => i.length>5)
    // console.log(newName)

    // array1.map((n) => (
    //     newArray.push(n * 10)
    // ))


    // array1.forEach(n => newArray.push(n * 5))
    // console.log(newArray)
    // console.log(newArray)



    // array1.forEach(n => n % 2 == 0 ? console.log(`'Zoj' = ${n}`) : '')

    // array1.forEach((n) => {
    //     if(n % 2 == 0) {
    //         console.log(n)
    //     }
    // })
    // array1.map((n) => {
    //     if(n % 2 ==0) {
    //         console.log(n)
    //     }
    // })

    // for(let i = 0 ; i<array1.length ; i++) {
    //     console.log(array1[i])
    // }

    // array1.map((i) => {
    //     return console.log(i)
    // })

    // const array2 = array1
    // const array2 = [1,2,3]

    // console.log(array1==array2)
    // userID.family = ['Kasra']
    // console.log(userID)
    // console.log(userID.family[0])
    // console.log(userID.fullName('Kasra '))
    const workers = [
        { id: 1, age: 18 },
        { id: 2, age: 20 },
        { id: 3, age: 22 },
        { id: 4, age: 25 }
    ]
    const workIs = workers.filter(workAge)
    console.log(workIs)
    function workAge({ age }) {
        return age > 22
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    const nummm = workers.some(u => u.name)
    console.log(nummm)

    const even = numbers.filter(isEven)

    function isEven(element) {
        return element % 2 == 0
    }
    // console.log(even)
    // const even = numbers.filter((n) => n % 2 == 0)
    // console.log(even)

    const users = [
        { id: 1, name: "Ali" },
        { id: 2, name: "Sara" },
        { id: 3, name: 'Kasra' },
        { id: 4, name: 'Soheil' }
    ];
    const students = users.filter((u) => u.name == 'Ali' || u.name == 'Kasra')
    console.log(students)

    const filterHandler = () => {

        // 4️⃣ متد filter → بررسی می‌کنه هر کاربر شرایط فیلتر رو دارد یا نه
        // toLowerCase برای اینکه حساس به بزرگی/کوچکی نباشه
        const result = users.filter((u) =>
            u.name.toLowerCase().includes(fil.toLowerCase())
        );

        console.log("نتیجه فیلتر:");
        console.log(result);
        filterName(result)
    }
    const math = Math.floor(Math.random() * 10)
    // console.log(math)

    function formHandler(e) {
        e.preventDefault()
        const data = new FormData(form);
        const name = data.get("username");

        console.log(valueInp)
        console.log('Form submit')
    }
    // console.log(filterName)
    //
    const handleCheckbox = (value) => {
        if (selected.includes(value)) {
            // حذفش کن
            setSelected(selected.filter(item => item !== value));
        } else {
            // اضافه کن
            setSelected([...selected, value]);
        }
    };
    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleCheckbox("football")}
                            />
                            فوتبال
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleCheckbox("volleyball")}
                            />
                            والیبال
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleCheckbox("basketball")}
                            />
                            بسکتبال
                        </label>

                        {/* <button onClick={logValues}>Log</button> */}
                    </div>
                    {selected.map((s) => (
                        <div>
                            <p>{s}</p>
                        </div>
                    ))}
                </form>
            </div>
            <div style={show ? { backgroundColor: 'green', width: '200px', height: '200px' } : { backgroundColor: 'green', width: '200px', height: '200px', opacity: '0.5' }}>
                <div>
                    <button onClick={() => setShow(!show)}>{show ? 'Hiddin' : 'Show'}</button>
                </div>
                {/* <button>Show</button> */}
            </div>

            <div>
                <form onSubmit={formHandler}>
                    <input type="text" name='username' onChange={(e) => setValueInp(e.target.value)} />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div>
                <hr />
                {users.map((u) => (
                    <div key={u.id}>
                        <h4>{u.name}</h4>
                    </div>
                ))}
                <input type="text" onChange={(e) => setFil(e.target.value)} />
                <button onClick={filterHandler}>Fillter</button>
            </div>
            <hr />
            <h3>User name : {user.name}</h3>
            <div>
                <button onClick={() => setMount(!mount)}>{mount ? 'Dark' : 'Light'}</button>
            </div>
            <div>
                <ul >
                    {score.map((scor) => (
                        <li key={scor.id}>{scor.name} : {scor.score
                        }</li>
                    ))}
                </ul>
            </div>
            <div style={{ marginTop: '3rem', backgroundColor: 'darkgray', width: '400px', height: '100px' }}>

                Feaild title :
                <input type="text" onChange={(e) => setFaild(e.target.value)} />
                {/* <h4>{faild}</h4> */}
                <h2>name : {faild}</h2>
            </div>
            <Pass name={name} faild={faild} />
            <hr />

            <input type="text" onChange={(e) => setInp(e.target.value)} />
            <button onClick={clickHandler}>click</button>
            {mount ? `you are ${inp}` : ''}

        </div>
    )
}
