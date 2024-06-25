const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb+srv://Bence:9WKNIhiergJnMPsA@cluster0.i3btxg8.mongodb.net/";

    async function EgyenibenAranyErem(){
        try{
            const client=await MongoClient.connect(url);
            console.log("Sikeres csatlakozás")
            const db=client.db("t13");
            const collection=db.collection("Helsinki");
    
           const kereses={Csapatmeret:1,Helyezes:1};
           const egyenibenAranyerem=await collection.find({CsapatMeret:{$eq:1},Helyezes:{$eq:1}},{projection:{_id:0,SportAg:1}}).toArray(); console.log(" Egyéniben szerzett aranyérem:",egyenibenAranyerem);
           
        }
        catch(err){
            console.error("Hiba a feldolgozás során!",err)
        }
    }
    EgyenibenAranyErem()