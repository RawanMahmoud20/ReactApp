// NotificationContext.js
import React, { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext({
  notificationData: [],
  setNotificationData: () => {},
  // unreadNotifications: 0,
  // setUnreadNotifications: () => {},
});

export const NotificationProvider = (props) => {
  const [notificationData, setNotificationData] = useState(() => {
    // قراءة البيانات من localStorage عند بداية التحميل
    const savedNotifications = localStorage.getItem("notificationData");
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });
  const [unreadNotifications, setUnreadNotifications] = useState(() => {
    const savedCount = localStorage.getItem("unreadNotifications");
    return savedCount ? Number(savedCount) : 0;
  });

   // كل ما تتغير notificationData نحفظها في localStorage
  useEffect(() => {
    localStorage.setItem("notificationData", JSON.stringify(notificationData));
    localStorage.setItem("unreadNotifications", unreadNotifications);
  }, [notificationData ,unreadNotifications]);

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
