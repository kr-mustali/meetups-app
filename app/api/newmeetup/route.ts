import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../db/mongodb";

async function postHandler(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      console.log(body);
      const data = body;

      const { db } = await connectToDatabase();

      const userCollection = db.collection("users");

      const result = await userCollection.insertOne(data);
      return NextResponse.json({ data: result }, { status: 201 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://new_user:admin@cluster0.gusc1.mongodb.net/users?retryWrites=true&w=majority"
      );

      const db = client.db();
      const userCollection = db.collection("users");

      const data = await userCollection.find().toArray();

      client.close();

      return NextResponse.json({ data: data }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
}

export { postHandler as POST, getHandler as GET };
