import React, { useEffect, useState } from 'react';
import userModel from '../types/Models';
import User from './User';

const Users = () => {
    const [users,setUsers]=useState<userModel[]>([]);
    const [team,setTeam]=useState<userModel[]>([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    const handleAddUser=(user:userModel):void=>{
       const newteam=[...team,user];
       setTeam(newteam)
    }
    return (
        <div>
            <h2>my user</h2>
            <h3>Team size:{team.length}</h3>
            {/* <User name="rasel" age={55} addUser={handleAddUser}></User> */}
            {users.map(user=><User user={user} addUser={handleAddUser}></User>)}
        </div>
    );
};

export default Users;