import { NextApiRequest } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/mongodb";

async function handler(req: Request, { params }: { params: { id: string } }) {
  try {
    const { db } = await connectToDatabase();

    if (req.method === "PUT") {
      const body = await req.json();
      const data = body;
      const { title, address, img, description, modifiedBy, modifiedByEmail } =
        body;

      const userCollection = db.collection("users");
      const myquery: any = { _id: new ObjectId(params.id) };

      const updatedMeetup = await userCollection.updateOne(
        myquery,
        {
          $set: {
            title,
            address,
            img,
            description,
            modifiedBy,
            modifiedByEmail,
          },
        },
        { upsert: true }
      );

      if (!updatedMeetup) {
        return NextResponse.json({
          success: false,
          message: "Meetup not found",
        });
      }

      return NextResponse.json({ success: true, data: updatedMeetup });
    } else {
      return NextResponse.json({
        success: false,
        message: "Method not allowed",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export { handler as PUT };
