import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

function BookList() {
    const {loading,data} = useQuery(gql`{
        books{
            name
            genre
            id
        }
    }`);
    if (loading){
        return(<div>Loading Books....</div>)
      }else {
        return data.books.map(book=>{
          return(
            <div key={book.id}>
              <li>Book Name : {book.name}</li>
            </div>
          )
        })
      }

}   

export default BookList;
