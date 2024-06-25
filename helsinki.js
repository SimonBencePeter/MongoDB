const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://Bence:9WKNIhiergJnMPsA@cluster0.i3btxg8.mongodb.net/";

async function kollekcioLetrehozas(){
    try{
    const client = await MongoClient.connect(url);
    const db= client.db("t13")
    await db.createCollection("Helsinki");
    console.log("A Helsinki kollekcio létrehozva");
    client.close;
}
    catch(err){
        console.error("hiba történt!",err);
    }
}
kollekcioLetrehozas();