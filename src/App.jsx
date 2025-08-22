import {useState} from "react";

function App() {

    const [columns, setColumns] = useState({
        todo:{
            name: "To-Do",
            items:[
                {id:1, content:"Market Research"},
                {id:2, content:"Write a novel"},
            ]
        },
        inProgress:{
            name: "In Progress",
            items:[
                {id:1, content:"Design UI"},
            ]
        },
        done:{
            name: "Done",
            items:[
                {id:1, content:"Set up repo"},
            ]
        },
    });

    const [newTask, setNewTask] = useState("");
    const [activeColumns, setActiveColumns] = useState("ToDo");
    const [draggedItem, setDraggedItem] = useState(null);

    const addNewTask = () => {
        if(newTask.trim() === "") return;

        const updatedColumns = {...columns};

        updatedColumns[activeColumns].items.push({
            id: Date.now().toString(),
            content: newTask,
        });

        setColumns(updatedColumns);
        setNewTask("");
    };

    const removeTask = (columnId, taskId) => {
        const updatedColumns = {...columns};

        updatedColumns[columnId].items = updatedColumns[columnId].items.filter((item) => item.id !== taskId);

        setColumns(updatedColumns);
    };

    const handleDragStart = (columnId, item) => {
        setDraggedItem({columnId, item});
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e, columnId) => {
        e.preventDefault();

        if(!draggedItem) return;

        const {columnId: sourceColumnId, item} = draggedItem;

        if(sourceColumnId === columnId) return;

        const updatedColumns = {...columns};

        updatedColumns[sourceColumnId].items = updatedColumns[sourceColumnId].items.filter((i) => i.id !== item.id);
        updatedColumns[targetColumnId].items.push(item);

        setColumns(updatedColumns);
        setDraggedItem(null);
    }

    const columnStyles = {
        todo: {
            header: "bg-gradient-to-r from-blue-600 to-blue-400",
            border: "border-blue-400",
        },
        inProgress: {
            header: "bg-gradient-to-r from-yellow-600 to-yellow-400",
            border: "border-yellow-400",
        },
        Done: {
            header: "bg-gradient-to-r from-green-600 to-green-400",
            border: "border-green-400",
        },
    }

    return (
        <>
            <div className="p-6 w-full min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 flex items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-4 w-full max-w-6xl">
                    <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-rose-400">
                        Kanban Board
                    </h1>

                    <div className=""></div>
                </div>
            </div>
        </>
    )
}

export default App;