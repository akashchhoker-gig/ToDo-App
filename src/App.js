import React, { useState } from 'react';
import './App.css'
import ToDoList from './ToDoList';
const App = () => {

  const [inputlist, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const deleteItems = (id) => {
    console.log("deleteItems")

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;

      })
    })
  }

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputList("");

  };
  return (
    <>
      <div className="main-div">

        <div className="center-div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder="Add a items"
            value={inputlist}
            onChange={itemEvent} />
          <button onClick={listofItems}> + </button>


          <ol>
            
              {/* {inputlist} */}
              {Items.map((itemval, index) => {
                return < ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />;
              })}
            
          </ol>



        </div>


      </div>
    </>
  );
};

export default App;