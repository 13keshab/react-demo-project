// import { useState } from "react";
const ChidOne = (props) => {
  const { name, gender, age, phn, upDateObjects } = props;
  // const [count, setCount] = useState(0);

  // const updateCount = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <ul>
        {/* <li>Count:{count}</li> */}
        <li>{name}</li>
        <li>{gender}</li>
        <li>{age}</li>
        <li>{phn}</li>
      </ul>
      <button onClick={upDateObjects}>Update</button>
      {/* <button onClick={updateCount()}></button> */}
    </div>
  );
};

export default ChidOne;
