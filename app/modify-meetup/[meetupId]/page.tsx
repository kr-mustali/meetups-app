import { getServerSession } from "next-auth";
import UpdateData from "../../components/UpdateData";
import React from "react";
import { redirect } from "next/navigation";

interface User {
  data: any;
}
export default async function MeetupDetails({
  params,
}: {
  params: { meetupId: string };
}) {

  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  const response = await fetch(
    `http://localhost:3000/api/getbyid/${params.meetupId}`,
    {
      cache: "no-store",
      method: "GET",
    }
  );
  const meetups: User = await response.json();

  return (
    <div>
      <UpdateData {...meetups.data} />
    </div>
  );
}
