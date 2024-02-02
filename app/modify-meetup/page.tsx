import React from "react";
import ModifyMeetupTable from "../components/ModifyMeetupTable";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
interface User {
  data: any;
}
const ModifyMeetups = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  const response = await fetch("http://localhost:3000/api/getmeetup", {
    cache: "no-store",
    method: "GET",
  });
  const meetups: User = await response.json();
  return (
    <div>
      <h1>Modify Meetup</h1>

      <ModifyMeetupTable meetups={meetups.data} />
    </div>
  );
};

export default ModifyMeetups;
