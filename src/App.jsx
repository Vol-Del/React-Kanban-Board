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
        }
    })


    return (
        <>
            <div>

            </div>
        </>
    )
}

export default App;