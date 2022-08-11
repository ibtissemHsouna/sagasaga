const mongoose=require("mongoose");
const etudiantSchema=mongoose.Schema({
    cin:{
        type:Number,
        requied:true,
    },
    nom:{
        type:String,
        required:true,
    },
    prenom:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
});
module.exports=Etudiant=mongoose.module.model("etudiant",etudiantSchema);