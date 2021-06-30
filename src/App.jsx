import React, { useState } from "react";

const App = () => {
  const [FullName, setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
  });
  const inputVal = (event) => {
    console.log(event.target.value);     
    console.log(event.target.name);
    
    // const value = event.target.value;
    // const name  = event.target.name;

    const {value,name} = event.target;
    
      setFullName((preValue)=>{

        if(name === "fName"){
          return{
            fname:value,
            lname:preValue.lname,
            email:preValue.email,
            phone:preValue.phone
          };
        }else if(name === "lName"){
          return{
            fname:preValue.fname,
            lname:value,
            email:preValue.email,
            phone:preValue.phone
          };
        }
        else if(name === "Email"){
          return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:value,
            phone:preValue.phone
          };
        }
        else if(name === "Phone"){
          return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:preValue.email,
            phone:value,
          };
        }
      });
    };
    const FullNameVal = (event) => {
      event.preventDefault();
      alert("form submitted");
    };
    
    return (
    <>
      <div className="main_div">
        <form onSubmit={FullNameVal}>
          <div>
            <h1>Hello {FullName.fname} {FullName.lname} </h1>
            <p>{FullName.email}</p>
            <p>{FullName.phone}</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fName"
              onChange={inputVal}
              value={FullName.fname}
            />
              <input
              type="text"
              placeholder="Enter Your last Name"
              name="lName"
              onChange={inputVal}
              value={FullName.lname}
            />
             <input
              type="text"
              placeholder="Enter Your last Name"
              name="Email"
              onChange={inputVal}
              value={FullName.email}
            />
             <input
              type="text"
              placeholder="Enter Your last Name"
              name="Phone"
              onChange={inputVal}
              value={FullName.phone}
            />
            <button type="submit">SUBMIT</button>
            
          </div>
          
        </form>
      </div>
    </>
  );
};

export default App;
