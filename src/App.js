import Header from "./components/header";
import Card from "./components/card";
import AddDoTo from "./components/addtodolist";
import DoToList from "./components/dotolist";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation()
  const [list,addList] = useState([
          {
              id:1,
              activity:"AWS S3 New Bucket File Tranfer Testing",
              date:"2025-04-04",
              level:"High",
              status:"Completed"
  
          },
          {
              id:2,
              activity:"Mail Trigger Scheduler Automation Task",
              date:"2025-04-04",
              level:"Low",
              status:"In Progress"
  
          }
      ])
     
  return (
    <div className="bg-[#bbedaf] h-full py-5 px-8" style={{fontFamily:'"Poppins", sans-serif'}}>
      <div className="bg-white border rounded-md p-10">
        <Header data={location.state.user} />
        <div className="flex justify-between gap-5 flex-wrap">
          <Card list={list}/>
        </div>
        <div className="flex gap-5  mt-5">
          <AddDoTo list = {list} addList = {addList}  />
          <DoToList list = {list} addList = {addList}  />
        </div>
      </div>
    </div>
  );
}

