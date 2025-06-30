import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// إعدادات المشروع الخاص بك في Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuPkN0pU-Uv4q9knGLDehdCJESmlxwC0g",
  authDomain: "helphivejs.firebaseapp.com",
  databaseURL: "https://helphivejs-default-rtdb.firebaseio.com",
  projectId: "helphivejs",
  storageBucket: "helphivejs.appspot.com",
  messagingSenderId: "517481080722",
  appId: "1:517481080722:web:d549ac56558b6d89df434b",
  measurementId: "G-D5LJ3899LR"
};

// تهيئة التطبيق (يجب أن تتم مرة واحدة فقط)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// الحصول على خدمة المصادقة
const auth = getAuth(app);

export { auth ,app};
