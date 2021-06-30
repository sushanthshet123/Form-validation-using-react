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

    const {value,name} = event.target;
    
      setFullName((preValue)=>{
          console.log(preValue);
          return{
              ...preValue,  //spread operator
              [name]:value
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
              name="fname"
              onChange={inputVal}
              value={FullName.fname}
            />
              <input
              type="text"
              placeholder="Enter Your last Name"
              name="lname"
              onChange={inputVal}
              value={FullName.lname}
            />
             <input
              type="text"
              placeholder="Enter Your last Name"
              name="email"
              onChange={inputVal}
              value={FullName.email}
            />
             <input
              type="Number"
              placeholder="Enter Your last Name"
              name="phone"
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
