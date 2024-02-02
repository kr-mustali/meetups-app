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

export { postHandler as POST };
