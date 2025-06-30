import React, { createContext, useEffect, useState } from "react";
export const AidContext = React.createContext({

});
export const AidContextProvider = (props) => {
  
  return (
    <AidContext.Provider>
      {props.children}
    </AidContext.Provider>
  );
};
