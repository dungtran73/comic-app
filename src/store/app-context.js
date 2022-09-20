import { createContext, useState } from "react";

const AppContext = createContext({
    userLoginId: null
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