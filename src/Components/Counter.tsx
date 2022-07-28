import React, { ChangeEvent, FormEvent, useState } from 'react';

interface user{
    name?:string,
    job?:string
}
const Counter = () => {
    const [Counter,setCounter]=useState<number>(0)
    const [Users,setUsers]=useState<user | null>(null)
    const handleIncrease=():void=>{
        setCounter(Counter + 1);
        
    }
    const handleSubmit= (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const userData ={
            name:"rasel"
        }
    }
    const handleNameChange=(e:ChangeEvent<HTMLInputElement>):void=>{

    }
    return (
        <div>
            <h1>this is counter</h1>
            <h2>{Counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;