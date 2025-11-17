import { useContext, useEffect, useState } from 'react'
import ScoreUser from '../context/ScoreUser'
import Pass from '../components/Pass'
import axios from 'axios'
import { data } from 'react-router-dom'
import request from '../tools/request'
export default function Harchi() {
    const [mount, setMount] = useState(false)
    const [user, setUser] = useState([])

    const score = useContext(ScoreUser)
    console.log(score)

    function requestt() {
        request('/users/3')
            .then(({ data }) => setUser(data))
    }

    useEffect(() => {
        requestt()
    }, [])

    console.log(user)
    return (
        <div>
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
            <Pass />
            <hr />
        </div>
    )
}
