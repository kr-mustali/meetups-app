import MeetupDetail from "../components/MeetupDetail";
import React from "react";
interface User {
  data: any;
}
export default async function MeetupDetails({
  params,
}: {
  params: { meetupId: string };
}) {
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
      <MeetupDetail {...meetups.data} />
    </div>
  );
}
