import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../db/mongodb";
import { NextRequest, NextResponse } from "next/server";

async function handler(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  if (req.method === "DELETE") {
    try {
      const { db } = await connectToDatabase();
      const userCollection = db.collection("users");
      const myquery = { _id: new ObjectId(params.id) };

      const deletedMeetup = await userCollection.deleteOne(myquery);

      if (deletedMeetup.deletedCount === 1) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json({
          success: false,
          message: "Meetup not found",
        });
      }
    } catch (error) {
      console.error("Error deleting meetup:", error);
      return NextResponse.json({
        success: false,
        message: "Internal Server Error",
      });
    }
  } else {
    return NextResponse.json({ success: false, message: "Method not allowed" });
  }
}

export { handler as DELETE };
