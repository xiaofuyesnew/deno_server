// importing the deno_mongo package from url
import { init, MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

// Initialize the plugin
// await init();

// Create client
const client = new MongoClient();
// Connect to mongodb
client.connectWithUri("mongodb://root:faye520@127.0.0.1:27017");

// Specifying the database name
const dbname: string = "Friend_list_deno";
const db = client.database(dbname);

// Declare the collections here. Here we are using only one collection (i.e friends).
const Friend = db.collection("friends");

export { db, Friend };
