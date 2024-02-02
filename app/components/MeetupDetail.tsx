import { ObjectId } from "mongodb";
import React from "react";
interface Data {
  title: string;
  img: string;
  address: string;
  description: string;
}
export default function MeetupDetail({
  img,
  title,
  address,
  description,
}: Data) {
  return (
    <div>
      <div className="mt-4">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img className="h-11 w-11" src={img} alt="Meetup Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">{title}</div>
            <p className="text-slate-800">Meetup location: {address}</p>
            <p className="text-slate-800">Meetup Description: {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
