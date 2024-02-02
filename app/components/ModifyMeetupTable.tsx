"use client";
import Link from "next/link";
import React from "react";
interface Data {}
const ModifyMeetupTable = ({ meetups }: any) => {
  const handleDeleteMeetup = async (meetupId: string) => {
    try {
      const response = await fetch(`/api/deleteMeetup/${meetupId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Deleted");
      } else {
        console.error("Failed to delete meetup");
      }
    } catch (error) {
      console.error("Error deleting meetup", error);
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Meetup Image
              </th>
              <th scope="col" className="px-6 py-3">
                Meetup Title
              </th>
              <th scope="col" className="px-6 py-3">
                Meetup Location
              </th>
              <th scope="col" className="px-6 py-3">
                Meetup Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {meetups.map((meetup: any) => {
              return (
                <tr key={meetup._id}>
                  <td className="px-6 py-4">
                    <div className="shrink-0">
                      <img
                        className="h-16 w-16 rounded-full"
                        src={meetup.img}
                        alt="Meetup Logo"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">{meetup.title}</td>
                  <td className="px-6 py-4">{meetup.address}</td>
                  <td className="px-6 py-4">{meetup.description}</td>

                  <td className="px-6 py-4">
                    <Link
                      href={`/modify-meetup/${meetup._id}`}
                      className="font-medium text-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      className="font-medium text-red-600 pl-3"
                      onClick={() => handleDeleteMeetup(meetup._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModifyMeetupTable;
