

export const create =(Model)=>async(req, res)=>{
    try{

        const data= await Model.create(req.body);
        if (!data){
         return   res.status(404).send("failed to create");
        }
        return res.status(200).send(data);
    }catch(error){
        console.log("somethimg went wrong!");
    }

}

export const getAll =(Model)=>async(req, res)=>{
    try{
        const data= await Model.find();
        res.status(200).send(data); 
    }catch(error){
        console.log("something went wrong", error);

    }
}