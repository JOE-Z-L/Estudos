import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedTest] = useState(false);

  const changeTextHandler = () => {
    if (changedText === true) {
      setChangedTest(false);
    }
    if (changedText === false) {
      setChangedTest(true);
    }
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>Its good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}

      <button onClick={changeTextHandler}>Change Test!</button>
    </div>
  );
};

export default Greeting;
