import ChidOne from "./childOne";
import MainParentTwo from "./mainParentTwo";

const upDateObjects = () => {
  let obj = {
    name: "Madhab",
    age: 23,
    gender: "Female",
    phn: "897665654",
  };

  console.log(obj);
};
const MainParent = () => {
  let name = "Keshab";
  let gender = "Male";
  let age = 23;
  let phn = "9078765908";
  return (
    <div>
      <ChidOne
        name={name}
        gender={gender}
        age={age}
        phn={phn}
        upDateObjects={upDateObjects}
      />
      <MainParentTwo />
    </div>
  );
};

export default MainParent;
