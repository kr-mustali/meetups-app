"use client";
interface Data {
  _id: ObjectId;
  title: string;
  img: string;
  address: string;
  createdBy: string;
  createdByEmail: string;
}
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";

export default function Meetup({
  _id,
  title,
  img,
  address,
  createdBy,
  createdByEmail,
}: Data) {
  const router = useRouter();
  const meetupDetails = () => {
    router.push(`/${_id}`);
  };
  return (
    <div className="rows-auto">
      <div className="mb-8">
        <div className="p-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-16 w-16 rounded-full"
                src={img}
                alt="Meetup Logo"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-600">Location: {address}</p>
              <p className="text-gray-500">Created by: {createdBy}</p>
              <p className="text-gray-500">
                Created by Email: {createdByEmail}
              </p>

              <button
                type="button"
                className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={meetupDetails}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
