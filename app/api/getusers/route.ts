import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://new_user:admin@cluster0.gusc1.mongodb.net/users?retryWrites=true&w=majority"
      );

      const db = client.db();
      const userCollection = db.collection("users");

      const result = await userCollection.find().toArray();
      console.log(result);

      client.close();
      return NextResponse.json({ data: result }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}
