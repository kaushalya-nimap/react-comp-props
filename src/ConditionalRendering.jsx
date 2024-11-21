import React,{useState} from 'react'

function ConditionalRendering() {
    const[isLoggedIn,setIsLoggedIn]=useState(false);
   // let items=['apple','qwert','asdfg'];
     // items=[]      

    const handleLogin=()=>{
        setIsLoggedIn(!isLoggedIn)
    }

  return (
    <div>
        <h1>Conditional rendering examples</h1>
        <div>
            <h2>Example 1:Toggle Login/Logout</h2>
            {isLoggedIn ?(<div><p>Welcome,User</p>
            <button onClick={handleLogin}>Log out</button>
        </div>):
        (<div><p>Please Login</p>
            <button onClick={handleLogin}>Log in</button>
        </div>)
        }
        </div>

        {/* <div>
            <h2>Example 2:Rendering based on array length</h2>
            {items.length===0?(<p>Items list is empty</p>):
            (<ul>
                {items.map(item=>(<li key={item}>{item}</li>))}
            </ul>)}
        </div> */}

        {/* <div>
            <h2>Example 3:Ternary operator</h2>
            <p>{isLoggedIn?'Welcome User':'Please Log in'}</p>
        </div> */}

        

    </div>
  )
}

export default ConditionalRendering