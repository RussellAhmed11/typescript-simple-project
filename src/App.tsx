import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';

let student='rasel';
student="maruf";
let studentsName:string="sadfag";
studentsName='rasel'
let fees:number[]=[12,23,45];

interface Persion {
  name:string,
  job:string,
  age?:number,
  maried:boolean,
  empolyed:string|boolean
}
const persion:Persion={
  name:"bill gates",
  job:"jobless",
  maried:true,
  // age:25,
  empolyed:true
}

const handleAddUser=(firstName:string,age:number,adress:string):number=>{
  
     console.log(firstName,age);
     return age;
}
function App() {
  return (
    <div className="App">
       <Counter></Counter>
       <Users></Users>
    </div>
  );
}

export default App;
