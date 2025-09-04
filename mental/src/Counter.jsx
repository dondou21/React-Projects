import { useReducer } from "react";

function reducer (state, action) {
    if(action.type === 'plus')
    {
        return {
            count: state.count +1
        }
    }else if(action.type === 'minus')
    {
        return {
            count: state.count - 1
        }
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0})
    return (
        <div>
            <h1>Counter with reducer</h1>
            <h1 style={{ color: 'green', fontSize: '8rem'}}>{state.count}</h1>

            <button
                style={{background: 'gray', fontSize: '2rem' }}
                onClick={() => {
                    dispatch({type: 'plus'})
                }}
            >
                +
            </button>

            <button
                style={{background: 'blue', fontSize: '2rem', margin: '2rem' }}
                onClick={() => {
                    dispatch({type: 'minus'})
                }}
            >
                -
            </button>
        </div>
    )
} 