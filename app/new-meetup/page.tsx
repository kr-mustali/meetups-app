import React from "react";
import MeetupForm from "../components/MeetupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const SignUp = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      <MeetupForm />
    </div>
  );
};

export default SignUp;
