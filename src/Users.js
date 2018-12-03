import React from 'react'

const Users = ({users, deleteUser}) => {
    const userList = users.map(user => {
        if (user.age > 20){
            return (
                <div className="user" key={user.id}>
                    <div>Name: { user.name }</div>
                    <div>Age: { user.age }</div>
                    <div>Belt: { user.belt }</div>
                    <button onClick={() => {deleteUser(user.id)}}>Delete user</button>
                </div>
            )
        } else {
            return null
        }
    })
    
    return(
        <div className="user-list">
            {userList}
        </div>
    )

}

export default Users