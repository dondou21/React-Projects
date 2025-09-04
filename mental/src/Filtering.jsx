import { useMemo, useCallback, useState } from 'react'

export default function Filtering() {
    const [checker, setChecker] = useState('')

    const data = useMemo(() => {
        const items = [];
        for(let i = 1; i <= 1000; i++)
        {
            items.push(`item ${i}`)
        }

        return items
    },[])

    const filterData = useCallback(() => {
        return data.filter((d) => d.includes(checker))
    })

    function handleSubmit () {
            e.preventDefault();
            setChecker(checker)
    }

    

    return (
        <div>
            <h1>Filtering</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Search Items...'
                    onChange={(e) => setChecker(e.target.value)}
                    value={checker} 
                
                />
            </form>
            <ul>
               {
                filterData().map((item, index) => {
                    return (<li key={index}>
                        {item}
                    </li>)
                })
               }
            </ul>
        </div>
    )
}