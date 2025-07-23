

import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]); // بدون كروت افتراضية

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
