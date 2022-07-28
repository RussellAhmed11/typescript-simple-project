import React, { FC } from 'react';
import userModel from '../types/Models';
// interface props{
//     age:number,
//     name:string,
//     addUser:()=>void
// }
interface props{
    user:userModel;
    addUser:(user:userModel)=>void
}
const User:FC<props> = ({user,addUser}) => {
   
    return (
        <div>
            <h1>this is name:{user.name}</h1>
            <h2>this is :{user.email}</h2>
            <button onClick={()=>addUser(user)}>add</button>
        </div>
    );
};

export default User;