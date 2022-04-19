const {MongoClient} = require('mongodb');

function get_client(){
	const uri = process.env.URI 
	if (!uri){
		throw new Error("Invalid Credentials")
	}

    return new MongoClient(uri);
}
async function get_data_from_db(database,collection,query){
	const client = get_client()
	await client.connect()
	const data = []

	const db = await client.db(database)
	const cursor = await db.collection(collection).find(query);
	await cursor.forEach((document)=>{
		data.push(document)
	})
    client.close()
	return data
}
async function insert_one_to_db(database,collection,data){
	const client = get_client()
	await client.connect()
	const db = await client.db(database)
	await db.collection(collection).insertOne(data);
    client.close()
	return true
}
module.exports = { get_data_from_db,get_client,insert_one_to_db}