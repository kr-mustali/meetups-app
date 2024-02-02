import { MongoClient } from "mongodb";

const uri: string = process.env.MONGODB_URI ?? "";



const client = new MongoClient(uri)

export async function connectToDatabase() {
  await client.connect()
  const db = client.db()
  return { db, client }
}