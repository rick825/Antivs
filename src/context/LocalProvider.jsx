import React,{createContext, useState, useContext} from 'react';

const LocalContext = createContext();



export const LocalProvider = ({children})=>{
  
    const [phone,setPhone] = useState('+1 888-681-4978');
    const [email,setEmail] = useState('test@gmail.com');
    const [errors,setErrors] = useState('');

    return(
        <LocalContext.Provider value={{phone,setPhone,email,setEmail,errors,setErrors}}>
            {children}
        </LocalContext.Provider>
    )
}


export const useLocalContext = () => useContext(LocalContext)