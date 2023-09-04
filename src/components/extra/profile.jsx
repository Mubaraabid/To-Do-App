import React from 'react';

// const Profile = (props) => {
//   const [name,setName]=React.useState("");
// const changeName = () => {
//     setName(props.name);
//   };
// return (
//     <div>
//         <h1>{name}</h1>
//         <button onClick={changeName}>click me</button>
//     </div>
// )



const Profile =(props)=>{
    return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};
// };

export default Profile;