import { useReducer } from "react";

function reducer(state, action) {
    if(action.type === 'plus') {
        return {count: state.count +1}
    }else if(action.type === 'minus') {
        return {count: state.count -1}
    } else {
        throw new Error('something when wrong')
    }
}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <h1>{state.count}</h1>

            <button 
                style={{fontSize: '2.3rem', margin: '3rem'}}
                onClick={() => {
                    dispatch({ type: 'plus' })
                }}
            >
                +
            </button>

            <button 
                style={{fontSize: '2.3rem', margin: '3rem'}}
                onClick={() => {
                    dispatch({ type: 'minus' })
                }}
            >
                -
            </button>
        </div>
    )
}