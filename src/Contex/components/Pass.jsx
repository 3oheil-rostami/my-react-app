import React, { useContext, useState } from 'react'
import ScoreUser from '../context/ScoreUser'


export default function Pass(props) {

    const lesson = useContext(ScoreUser)
    const [faild , setFealid] = useState('')


    const [state, setState] = useState({
        lesson
    })

    // console.log(lesson[0])
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.faild}</h1>
            <h2>Pass</h2>
            <div>
                {lesson.map((less) => (
                    <div key={less.id}>

                        <div>
                            <input
                                placeholder={less.name}
                                onChange={(e) =>
                                    setState(prev => ({
                                        ...prev,
                                        [less.id]: e.target.value
                                    }))
                                }
                            />

                        </div>

                    </div>
                ))}
            </div>
               
        </div>
    )
}
