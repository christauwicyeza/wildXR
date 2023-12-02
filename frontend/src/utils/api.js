import React from "react";
import axios from "axios";
 
export async function allEducation(){
    try{
        const data = await axios.get("http://localhost:3000/get")
        return data.data;
    }
    catch(error){
        console.log ("content unavailable")
    }
}

export async function signIn(userData){
    const url = `${import.meta.env.VITE_URL}/signin`
    try{
const data = await axios.post(url,userData);
return data.data
    }catch(error){
console.log(error)
    }
}

export async function signUp(userData){
    const url = `${import.meta.env.VITE_URL}/signup`
    try{
const data  = await axios.post(url,userData)
console.log("dataa",data)
return data.data
    } catch(error){
        console.log(error)
    }
}

export async function  createEducation (educationData){
    const url = `${import.meta.env.VITE_URL}/create`
    try{
        const data = await axios.post(url,educationData)
console.log("dataa",data)
return data.data

    } catch(error){
        console.log(error)
    }

}

export async function allFacts (){
    const url = `${import.meta.env.VITE_URL}/getFact`
    try{
const data = await axios.get(url)
return data.data
    } catch(error){
console.log(error)
    }
}

export async function  createFact (factsData){
    const url = `${import.meta.env.VITE_URL}/createFact`
    try{
        const data = await axios.post(url,factsData)

return data.data

    } catch(error){
        console.log(error)
    }

}

export async function  deleteFact (id){
    const url = `${import.meta.env.VITE_URL}/deleteFact`
    try{
        const data = await axios.delete(id)

return data.data

    } catch(error){
        console.log(error)
    }

}

export async function editEducation(educationData, id) {
    const url = `${import.meta.env.VITE_URL}/update/${id}`;
    try {
      const data = await axios.patch(url, educationData);
      return data.data;
    } catch (error) {
      console.log("can't edit");
    }
  }

  export async function education(id) {
    const url = `${import.meta.env.VITE_URL}/getOneEducation/${id}`;
    try {
      const data = await axios.get(url);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }