import { useState } from "react"

export default function AddDoTo(props){
    const [item,setItem] = useState("")
    const [date,setDate] = useState("")
    const [status,setStatus] = useState("")
    const [level,setLevel] = useState("")
    const list = props.list
    const addList = props.addList
    const handleValue = (evt)=>{
        setItem(evt.target.value)
    }
    const handleDate =(evt)=>{
        setDate(evt.target.value)
    }
    const handleStatus = (evt)=>{
        setStatus(evt.target.value)
    }
    const handleLevel = (evt)=>{
        setLevel(evt.target.value)
    }
    const handleList = ()=>{
        addList([...list,{id:list.length+1,activity:item,date:date,level:level,status:status}])
        setItem("");
        setDate("");
        setLevel("");
        setStatus("");
    }
    return(
        <div className="flex flex-col gap-3" style={{fontFamily:' "Poppins", sans-serif'}}>
            <h1 className="text-lg font-medium">Manage Activities</h1>
            <div>
                <table >
                    <tr>
                        <td className="p-2">Task Name</td>
                        <td className="p-2"><input placeholder="Enter Your Task Name" onChange={handleValue} value={item} className="border rounded-xl p-1 border-black" type="text" /></td>
                    </tr>
                    <tr>
                        <td className="p-2">Date</td>
                        <td className="p-2"><input value={date} className="border rounded-xl p-1 border-black w-full" type="date" onChange={handleDate}/></td>
                    </tr>
                    <tr>
                        <td className="p-2">Select Level</td>
                        <td className="p-2"><select value={level} onChange={handleLevel} className="w-full rounded-xl p-1 border border-black">
                        <option value=""   disabled>Select Level</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select></td>
                    </tr>
                    <tr>
                        <td className="p-2">Select Stutus</td>
                        <td className="p-2"><select value={status} onChange={handleStatus} className="w-full rounded-xl p-1 border border-black">
                        <option value=""  disabled>Select Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="In Hold">In Hold</option>
                        <option value="Completed">Completed</option>
                        <option value="In Review">In Review</option>
                    </select></td>
                    </tr>
                    
                    
                    <tr>
                        <td className="p-2"></td>
                        <td className="p-2"><button onClick={handleList} className="bg-black border w-full border-black text-white font-medium p-1 px-16 hover:bg-gray-700 hovetext-black">Add <i class="fa-solid fa-notes-medical" style={{color: "#ffffff"}}></i></button></td>
                    </tr>
                </table>
                
            </div>
        </div>
    )
}