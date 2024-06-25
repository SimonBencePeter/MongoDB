const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb+srv://Bence:9WKNIhiergJnMPsA@cluster0.i3btxg8.mongodb.net/";

    async function TornaUszasSportagLekerdezes(){
        try{
            const client=await MongoClient.connect(url);
            console.log("Sikeres kapcsolódás!");
            const db=client.db("t13");
            const collection=db.collection("Helsinki");

            const TornaUszasSportag=await collection.find({SportAg:{$in:["torna","uszas"]}},{projection:{_id:0,SportAg:1,VersenySzam: 1}}).toArray();
            console.log("Sportágakat, amik torna vagy úszás sportágból vannak",TornaUszasSportag);
            client.close();
        }
        catch(err){
            console.error("Hiba a lekérdezés során!",err);
        }
    }
    TornaUszasSportagLekerdezes()