import { useState } from "react";
import styles from  "./styles.css";

const Header = ({ currentPage }) => {
  console.log("current page got is", currentPage);
  const items = [
    {
    itemName :"Mobile",
    itemImage: "/mobile.avif"
  },
  {
    itemName :"laptop",
    itemImage: "/laptop.jpg"
  },
  {
    itemName :"Machine",
    itemImage: "/machine.jpg"
  }
  ]
  const [list, setList] = useState([]);
  const addItem = (item) =>{
    let newList = [...list, item];
    setList(newList);
  }

  const deleteItem = (idx) =>{
    let removeItem = [];
      for(let i = 0 ;i<list.length; i++){
      if(i != idx){
        removeItem.push(list[i]);
      }
    }
    console.log(removeItem);
  let newItem = list.filter((_, index) => index !== idx);
    setList(newItem);
  }

  return (
    <div style={{ background: "white", height: "100vh" }}>
      <h1>Items</h1>
      <div>
        {items.map((item, idx) =>
           <li key={idx}>
            <img className="img1" src= {item.itemImage} alt={item.name}/>
            <button onClick={() => addItem(item)}>Add</button></li>
          )}
      </div>

      <h1>Add to Cart</h1>
      <div>
        {list.map((item,idx)=>
        <li key={idx}>
          <img className="img1" src= {item.itemImage} alt={item.name}/> <button onClick={() => deleteItem(idx)}>Delete</button>
        </li>
        )}
      </div>
    </div>
  );
};

export default Header;


  // const [inputText, setInputText] = useState("");
  // console.log("current page got is", currentPage);
  // const addList = () => {
  //   if (!inputText) return;
  //   let newList = [...list, {text: inputText, isDeleted: false}];
  //   setList(newList);
  //   setInputText("");
  // };

  // const deleteItem = (idx) => {
  //   let newList = list.map((data, index) => {
  //     if(index === idx) {
  //       return ({...data, isDeleted: true})
  //     }
  //     return data
  //   })
  //   setList(newList);
  // };

  /* /* <h1>To Do List</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="btn" onClick={addList}>
        Add
      </button>
      {list.map((item, idx) => (
        <li key={idx} className={item?.isDeleted ? "delete" : ""}>
          {item?.text} <button onClick={() => deleteItem(idx)}>Delete</button>
        </li>
      ))} */ 
