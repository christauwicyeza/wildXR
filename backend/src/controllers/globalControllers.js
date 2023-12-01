

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

 export const deleteController =(Model)=> async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id);
      if (!data) {
        res.status(400).send("data not found");
      }
      res.status(200).send(data);
    } catch (error) {
      console.log(error);
    }
  };

  export const updateController = (Model)=> async(req,res)=>{
    try{
        const id = req.params.id
        const data = await Model.findByIdAndUpdate(id,req.body,{new:true})
        if(!data){
            res.status(404).send("data not found")
        }
        res.status(200).send(data)
    }catch(error){
        console.log(error)
    }
  }

export  const getOne = (Model)=> async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Model.findById(id);
      if (!data) {
        res.status(404).send("Data doesn't exist");
      }
  
      res.status(200).send(data);
    } catch (error) {
      console.log(error);
    }
  };