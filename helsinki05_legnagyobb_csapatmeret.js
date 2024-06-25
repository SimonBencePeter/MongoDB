const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb+srv://Bence:9WKNIhiergJnMPsA@cluster0.i3btxg8.mongodb.net/";

    async function LegnagyobbCsapatMeret(){
        try{
            const client=await MongoClient.connect(url);
            const db=client.db("t13");
            const collection=db.collection("Helsinki");

            
            const legnagyobbCsapatMeret=await collection.find({},{projection:{_id:0,Helyezes:1,CsapatMeret:1,SportAg:1,VersenySzam:1}}).sort({CsapatMeret:-1}).limit(1).toArray();
            console.log("A legnagyobb csapatmérettel rendelkező sportág: ",legnagyobbCsapatMeret);
            client.close();
        }     
        catch(err){
            console.error("Hiba a feldolgozás során!",err);
        }
    }
LegnagyobbCsapatMeret()