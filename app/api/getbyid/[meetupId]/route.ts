import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/mongodb";

async function getHandler(
  req: NextRequest,
  { params }: { params: { meetupId: string } }
) {
  if (req.method === "GET") {
    try {
      const { db } = await connectToDatabase();

      const myquery = { _id: new ObjectId(params.meetupId) };
      const userCollection = db.collection("users");

      const data = await userCollection.findOne(myquery);
      return NextResponse.json({ data: data }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
}

export { getHandler as GET };
