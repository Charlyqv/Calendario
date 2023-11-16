import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";


export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const startLogin = async({ email, password }) => {
    console.log("🚀 ~ file: useAuthStore.js:10 ~ startLogin ~ { email, password }:", { email, password });
    try {
      
      const resp = await calendarApi.post('/auth',{ email, password });
      console.log("🚀 ~ file: useAuthStore.js:15 ~ startLogin ~ resp:", resp);
      
    } catch (error) {
      console.log("🚀 ~ file: useAuthStore.js:18 ~ startLogin ~ error:", error);
      
    }
    
  }

  return{
    //* Propiedades
    status, 
    user, 
    errorMessage,

    //* Métodos 
    startLogin,

  }

}