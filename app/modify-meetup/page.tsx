import React from "react";
import ModifyMeetupTable from "../components/ModifyMeetupTable";
interface User {
  data: any;
}
const ModifyMeetups = async () => {
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
