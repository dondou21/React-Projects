import useUsers from "./useUsers";

export default function Users () {
    const { users, error, loading } = useUsers()

    console.log(error)
   
    return (
        <div>
            <h1>Users data</h1>
            <h2>{ loading ? 'loading...' : ''}</h2>
            <h2 style={{ color: 'red'}}>{error}</h2>
            <ul>
                {
                    users.map((user) => {
                        return (<li key={user.id}>
                            {user.name}
                            {user.username}
                            {user.email}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}