import React, { useContext, useState } from 'react'
import ScoreUser from '../context/ScoreUser'


export default function Pass() {
    const lesson = useContext(ScoreUser)

    const [state, setState] = useState({
        lesson
    })

    // console.log(lesson[0])
    return (
        <div>
            <h2>Pass</h2>
            <div>
                {lesson.map((less) => (
                    <div key={less.id}>
                        <div>{state[less.id] ? state[less.id] : less.name}</div>

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
