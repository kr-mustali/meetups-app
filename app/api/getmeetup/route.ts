import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import {connectToDatabase} from "../../../db/mongodb";
async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      
      const { db } = await connectToDatabase()
      const userCollection =await db.collection("users");

      const data = await userCollection.find().toArray();


      return NextResponse.json({ data: data }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
}

export { getHandler as GET };
