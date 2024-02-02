import Meetup from "./components/Meetup";
interface User {
  data: any;
}
export default async function Home() {
  const response = await fetch("http://localhost:3000/api/getmeetup", {
    cache: "no-store",
    method: "GET",
  });
  const meetups: User = await response.json();

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-10 pt-5">
        List of Meetups
      </h1>
      <div className=" md:grid md:grid-cols-3 md:gap-4">
        {meetups.data.map((meetup: any) => {
          return <Meetup key={meetup._id} {...meetup} />;
        })}
      </div>
    </>
  );
}
