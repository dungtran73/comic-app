import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZPkUTfAEx8meJbYnZjkzM7C-bJ_QYwAQ",
  authDomain: "comic-app-4d9e8.firebaseapp.com",
  databaseURL:
    "https://comic-app-4d9e8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comic-app-4d9e8",
  storageBucket: "comic-app-4d9e8.appspot.com",
  messagingSenderId: "150221118221",
  appId: "1:150221118221:web:f2fa2fbf621f2d68de6e44",
  measurementId: "G-W242RM97H2",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());

const AppContext = createContext({
    firebaseApp : app,
    database : database,
    dbRef: dbRef,
    userLoginId: '456'
});

export function AppContextProvider(props){
    const [userLoginId, setUserLoginId] = useState('123');
    const context = {
        userLoginId: userLoginId,
    };

    return (<AppContext.Provider value={context}>
        {props.children}
    </AppContext.Provider>);
}

export default AppContext;