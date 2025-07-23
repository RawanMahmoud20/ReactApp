// NotificationContext.js
import React, { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext({
  notificationData: [],
  setNotificationData: () => {},
});

export const NotificationProvider = (props) => {
  const [notificationData, setNotificationData] = useState(() => {
    // قراءة البيانات من localStorage عند بداية التحميل
    const savedNotifications = localStorage.getItem("notificationData");
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });
  const [unreadNotifications, setUnreadNotifications] = useState(0);
   // كل ما تتغير notificationData نحفظها في localStorage
  useEffect(() => {
    localStorage.setItem("notificationData", JSON.stringify(notificationData));
  }, [notificationData]);

  return (
    <NotificationContext.Provider 
    value={{ 
      notificationData, 
      setNotificationData , 
      unreadNotifications, 
      setUnreadNotifications 
      }}>
      {props.children}
    </NotificationContext.Provider>
  );
};
