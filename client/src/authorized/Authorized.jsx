
// import React, { useEffect } from 'react'
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import api from "../utils/AxiosInstance";
// const Authorized = ()=> {

// const navigate = useNavigate()

// const checkAuth = async()=>{
   
// try {
//    const res = await api.get("/user/verifyuser") 

//    if (res.data.message === "not verified") {
//     return navigate("/login");
//   } 
//   else if (res.data.message === "token verified"){
//     return true;
//   }




// } catch (error) {
   
//     console.log(error);
//     navigate("/login")
//     toast.error("Something Went Wrong!");
// }





// }

// useEffect(() => {
//     checkAuth();
//   }, []);
  
// }

// export default Authorized


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/AxiosInstance";
const Authorized = () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const res = await api.get("/user/verifyuser");
      console.log(res.data.message);
      if (res.data.message === "not verified") {
        return navigate("/login");
      } else if (res.data.message === "Token verified") {
        return true;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
      toast.error("Something Went Wrong!");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
};

export default Authorized
