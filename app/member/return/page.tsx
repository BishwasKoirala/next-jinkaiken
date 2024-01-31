"use client";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import LoadBurrows from "./loadBurrows";
// get the rented books of the student from StudentId

// load the books on the screen

// press button and do the returnwork

interface FormData{
  studentID : string;
  bookId : string
}
const Return = () => {
  return (
    <div>
      <UnderDevelopmentAlert />
      <LoadBurrows studentId="202201442"/>
    </div>
  )

};

export default Return;
