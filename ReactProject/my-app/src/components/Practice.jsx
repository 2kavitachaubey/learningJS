import { Joan } from "next/font/google";
import { useState, useEffect } from "react";
const Practice = ({ thisPage }) => {
  const [data, setData] = useState([]);
  const btns = [1,2,3,4,5,6,7,8,9,10];

  const apiButtons = (item) => {
    for (let i = (item-1)*10; i <= (item*10); i++) {
      setData([]);
      fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
        .then((response) => response.json())
        .then((json) => {
          setData((prevData) => [...prevData, json]);
        });
    }
  };

  return (
    <div>
      <p>Current Page: {thisPage}</p>
      {btns.map((item,idx) =>(
        <button className="apiButton" key={idx} onClick={()=> apiButtons(item)}>{item}</button>
      ))}
      {data.map((item, index) => (
        <div key={index}>
          userId: {item.id}
          <button onClick={() => moreDetail(item.id)}> 1 </button>
        </div>
      ))}
    </div>
  );
};
export default Practice;



// const [single, setSingle] = useState({});
  // useEffect(() => {
  //   for(let i = 1; i< 11; i++){
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(prevData => [...prevData,json]);
  //     });
  //   }
  //     console.log('hello useEffect')
  // }, []);


  // console.log('hello outside')

  // const moreDetail = (index) => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setSingle(json);
  //     });
  // };
  // console.log('single value', single)
