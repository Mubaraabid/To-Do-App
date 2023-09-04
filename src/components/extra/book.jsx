import React, { useState } from "react";
import BookList from "./booklist";

const BookInput=()=>{

    const[BookInfo, setBookInfo]= useState({
        title:"",
        description:"",
        image:""
    });

    const[newArray, setNewArray]=useState([]);
    // const newArray=[];
    const handleInput=(e)=>{

         const name= e.target.name;
        const value=e.target.value;
        // console.log(name,value);
        
        setBookInfo({...BookInfo, [name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newBook={...BookInfo};
        console.log(newBook);
        // newArray.push({newTodo});
        setNewArray([...newArray,newBook]);
        setBookInfo({title:"", description:"", image:""});

    }

    return (
        <div>
        <div>
            <fieldset>
                <legend>ADD BOOK</legend>
                <form action="" onSubmit={handleSubmit} >
                    <div>
                        <label>Book Title:</label>
                        <input type="text" name="title"  value={BookInfo.title}
                        onChange={handleInput}
                         />
                    </div>
                    <div>
                        <label>Book Description:</label>
                        <input type="text" name="description"  value={BookInfo.description}
                        onChange={handleInput}
                         />
                    </div>
                    <div>
                        <label>BookStatus:</label>
                        <input type="text" name="image"  value={BookInfo.status}
                        onChange={handleInput}
                         />
                    </div>
                    <button type="submit">ADD</button>
                </form>
            </fieldset>
           
            </div> 
            <div>
            <BookList BookArray={newArray}/>
            </div>
        
        </div>
    )
}

export default BookInput;















// import React from "react";

// const Book = ({ array }) => {
//   const data1 = array.map((data) => (
//     <li >
//       <p>Title: {data.title}</p>
//       <p>Description: {data.description}</p>
//       <img src={data.image} alt="" ></img>
//     </li>
//   ));
//   return (
//     <div>
//       <ul>{data1}</ul>
//     </div>
//   );
// };

// export default Book;


// import React from "react";

// const Book=({array})=>{
//   const data1=
//   array.map((data,index)=><li key={index}>
//  <p>{data.title}</p>
//  <p>{data.description}</p> 
//   </li>);
//   return(
//     <div>
//     <ul>{data1}</ul>
//     </div>
//   );
// }

// export default Book;





// import React from "react";

// const Book=(props)=>{
//   return (
//     <div>
//       <p>Title: {props.title}</p>
//      <p>Image: <img src={props.image} alt="" ></img></p>
//       <p>Description: {props.description} </p>
//     </div>

//   );
// }
// export default Book;


// import React from "react";

// const Book=(props)=>{
//     const book={
//       //src: props.src,
//       title: 'props.title',
//       description: 'props.description'
//     };
//     const listItems = book.map((item) =>

//       <li>{item}</li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
// // };

// export default Book;