import React,{useState} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Edit from './Edit'
import RegisterForm from './Register Form.html';

const App = (props) => {
    const[data,setData]=useState({
        FirstName:'',
        LastName:'',
        Email:''
    })
    const{FirstName,LastName,Email}=data;
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    
    }
    const submitHandler =(e)=>
        {
            e.preventDefault();
            fetch('https://test-ap1-88642-default-rtdb.firebaseio.com/data.json',
  {
    method:'POST',
    body:JSON.stringify(data),
    headers:
    {
      "Content-Type":"application/json;charset=UTF-8"
    } 
  }
).then(res => alert('Data posted')).catch(err=>console.log(err))
     }
  return (
    <div>
      <BrowserRouter>
      <switch>
        <Route path="./RegisterForm.html" exactcomponent={RegisterForm}/>
        <Route path="/edit" exactcomponent={Edit}/>
      </switch>
      </BrowserRouter>
    </div>
  )
}

export default App
