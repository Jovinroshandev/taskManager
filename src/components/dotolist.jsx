
export default function DoToList(props){
    const list = props.list
    const addList = props.addList
    const handleDelete = (id)=>
    {
        const temList = list.filter(function(value){
            if (value.id === id){
                return false
            }
            else{
                return true
            }
        })
        addList(temList)
    }
    return(
        <div className="border border-l-4 p-3 rounded-md flex-grow">
            <h1 className="text-lg font-medium ">Today's Activity</h1>
            {
                list.map(function(item){
                    return <div className="flex justify-between items-center bg-blue-100 m-1 px-5 p-2 rounded-2xl hover:bg-green-200 cursor-pointer">
                    <div>
                        <p className="font-medium"><i class="fa-solid fa-pen-to-square"></i> {item.activity}</p>
                        <p className="my-1">{item.date}</p>
                        <div className="flex gap-5">
                            <div className={item.level === "High"? "bg-red-200 rounded-lg": item.level === "Low"?"bg-yellow-200 rounded-lg":"bg-green-200 rounded-lg"}>
                            <div className="font-medium px-1">{item.level}</div>
                            </div>
                            <div className="bg-green-100 text-black font-medium px-1 rounded-lg">{item.status}</div>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>handleDelete(item.id)}><i className="fa-solid fa-circle-xmark" style={{color: "#000000"}}></i></button>
                    </div>
                    </div>
                })
            }
        </div>
    )
}