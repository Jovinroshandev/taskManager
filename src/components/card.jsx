import { useEffect, useState } from "react"

export default function Card(props){

    const [completeCount,setComplete] = useState(0)
    const [holdCount,setHold] = useState(0)
    const [reviewCount,setReview] = useState(0)
    const [inprogressCount,setInprogress] = useState(0)
    const list = props.list
    
    useEffect(()=>{
        setComplete(list.filter(item=> item.status==="Completed").length)
        setHold(list.filter(item=> item.status==="On Hold").length)
        setReview(list.filter(item=> item.status==="In Review").length)
        setInprogress(list.filter(item=> item.status==="In Progress").length)
    },[list])
    return(
        
        <>
        <div className="text-center p-6 flex-grow mt-5 border rounded-lg" style={{backgroundColor:"#CDB4DB",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
           <p className="font-medium text-lg">{completeCount}</p>
           <p className="font-medium text-lg">Completed</p>
           <p className="font-medium text-lg"><i class="fa-solid fa-flag-checkered"></i></p>
        </div>
        <div className="text-center p-6 flex-grow mt-5 border rounded-lg" style={{backgroundColor:"#FFC8D0",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
           <p className="font-medium text-lg">{holdCount}</p>
           <p className="font-medium text-lg">On Hold</p>
           <p className="font-medium text-lg"><i class="fa-solid fa-pause"></i></p>
        </div>
        <div className="text-center p-6 flex-grow mt-5 border rounded-lg" style={{backgroundColor:"#FFAFCC" ,boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
           <p className="font-medium text-lg">{reviewCount}</p>
           <p className="font-medium text-lg">In Review</p>
           <p className="font-medium text-lg"><i class="fa-solid fa-magnifying-glass"></i></p>
        </div>
        <div className="text-center p-6 flex-grow mt-5 border rounded-lg" style={{backgroundColor:"#A2D2FF",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
           <p className="font-medium text-lg">{inprogressCount}</p>
           <p className="font-medium text-lg">In Progress</p>
           <p className="font-medium text-lg"><i class="fa-solid fa-spinner"></i></p>
        </div>
        </>
    )
}