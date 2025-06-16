import ChildTwo from "./childTwo";
import ChildThree from "./childThree";

const MainParentTwo = () => {
  let qualification = "B.Tech";
  let collage = "Parul University";
  let name = "Keshab";
  let age = 23;
  let gender = "Male";
  let phn = "8976564345";

  return (
    <>
      <ChildTwo qualification={qualification} collage={collage} />
      <ChildThree
        name={name}
        age={age}
        gender={gender}
        phn={phn}
        collage={collage}
        qualification={qualification}
      />
    </>
  );
};

export default MainParentTwo;
