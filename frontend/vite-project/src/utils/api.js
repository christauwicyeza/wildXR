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