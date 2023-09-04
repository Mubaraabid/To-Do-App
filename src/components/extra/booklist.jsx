import React from "react";


const BookList=({BookArray})=>{
    const list= BookArray.map((Booklist,index)=>(
                    
            <li key={index}>
                <p>Book Title: {Booklist.title}  </p>
                <p>Book Description: {Booklist.description}</p>
                <p>Book Status: {Booklist.status}</p>
             </li>
               ));
    return(
       <div>
        <ul>{list}</ul>
       </div>
    );
};

export default BookList;