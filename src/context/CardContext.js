import { createContext, useState } from "react";

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCards] = useState([]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
