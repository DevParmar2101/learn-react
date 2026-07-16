import {useState} from "react";

function UseStateEx5(){
    const [userInfo, setUserInfo] = useState({
        name: "Dev Parmar",
        age: "25",
        city: "Ahmedabad"
    });

    function changeData() {
        setUserInfo({
            ...userInfo, // this will keep the other data as it is and not remove it (it need to understand then remove of comment this line)
            city: "Mandsaur",
        })
    }

    return (
      <div>
          <h3>User Info</h3>
          <p>User FullName: {userInfo.name}</p>
          <p>User Age: {userInfo.age}</p>
          <p>User Location: {userInfo.city}</p>

          <button style={{ marginTop: "10px"}} onClick={changeData}>Change Data</button>
      </div>
    );
}

export default UseStateEx5;