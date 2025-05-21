import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <BsPlus className="me-2 fs-4" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> 
    );
}