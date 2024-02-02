"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
interface Data {
  _id: string;
  title: string;
  img: string;
  address: string;
  description: string;
}
const UpdateData = ({ _id, img, title, address, description }: Data) => {
  const [updateTitle, setTitle] = useState(title);
  const [updateAddress, setAddress] = useState(address);
  const [updateImg, setImg] = useState(img);
  const [updateDescription, setDescription] = useState(description);
  const [showToast, setShowToast] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleUpdate = async () => {
    try {
      const meetupData = {
        id:_id,
        title: updateTitle,
        address: updateAddress,
        img: updateImg,
        description: updateDescription,
        modifiedBy: session?.user?.name,
        modifiedByEmail: session?.user?.email,
      };

      const response = await fetch(
        `http://localhost:3000/api/modifyMeetup/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(meetupData),
        }
      );

      if (response.ok) {
        setShowToast(true);
      } else {
        console.error(
          "Failed to update meetup:",
          response.status,
          await response.text()
        );
      }
    } catch (error) {
      console.error("Error updating meetup:", error);
    }
  };
  function Toast() {
    return (
      <div
        id="toast-default"
        className="absolute right-5 flex items-center w-full max-w-xs p-4 text-gray-500 bg-slate-400 rounded-lg shadow"
        role="alert"
      >
        <div className="ms-3 text-sm font-normal text-black">
          Meetup modified!
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-default"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-lg mt-5 items-center space-x-4">
      {showToast && <Toast />}
      <div className=" grid ">
        <div className="sm:col-span-3">
          <label
            htmlFor="meetup-title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-title"
              id="meetup-title"
              value={updateTitle}
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="meetup-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-address"
              id="meetup-address"
              value={updateAddress}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="meetup-description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Description
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-description"
              id="meetup-description"
              value={updateDescription}
              onChange={(e) => setDescription(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="meetup-img"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Image
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-img"
              id="meetup-img"
              value={updateImg}
              onChange={(e) => setImg(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => router.push("/modify-meetup")}
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleUpdate}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateData;
