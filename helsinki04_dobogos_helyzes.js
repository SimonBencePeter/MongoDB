const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb+srv://Bence:9WKNIhiergJnMPsA@cluster0.i3btxg8.mongodb.net/";

    async function DobogosHelyezes(){
        try{
            const client =await MongoClient.connect(url);
            console.log("Sikeres kapcsolódás!");
            const db=client.db("t13");
            const collection=db.collection("Helsinki");

            const dobogosHelyezes=await collection.find({Helyezes: {$lte:3}},{
            projection:{_id:0,VersenySzam:1}}).toArray();
            console.log("Dobogos helyezések:",dobogosHelyezes);
            client.close();
        }
        catch(err){
            console.error("Hiba a feldolgozás során!",err);
        }
}
DobogosHelyezes()