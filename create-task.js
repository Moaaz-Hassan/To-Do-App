import { displayNumberOfActiveTasks } from "./tasks-overview.js";

export class CreatTask{
    constructor(taskName , options = { save: true }){
        this.taskName = taskName ;
        this.save = options.save;
        this.element = this.createTaskElement();
    }
    createTaskElement(){
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const checkedDiv = document.createElement("div");
        checkedDiv.classList.add("cheaked");

        const checkImg = document.createElement("img");
        checkImg.src = "./icon-check.svg";
        checkedDiv.appendChild(checkImg);

        const taskText = document.createElement("p");
        taskText.textContent = this.taskName;

        const removeDiv = document.createElement("div");
        removeDiv.classList.add("remove-task");
        removeDiv.classList.add("pointer-cursor")
        const removeImg = document.createElement("img");
        removeImg.src = "./icon-cross.svg";
        removeDiv.appendChild(removeImg);

        taskDiv.appendChild(checkedDiv);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(removeDiv);


        taskDiv.querySelector(".cheaked").addEventListener("click" , ()=>{
            this.MakeTaskAsComplete() ;
        })

        taskDiv.querySelector(".remove-task").addEventListener("click" , ()=>{
            this.RemoveEvent() ;
        })

        if(this.save){
            let taskes = JSON.parse(window.localStorage.getItem("Taskes") || "[]");

            taskes.push({name: this.taskName, status:null})
            window.localStorage.setItem("Taskes" , JSON.stringify(taskes ))
        }
        
        

        displayNumberOfActiveTasks()
        return taskDiv ;
    }
    MakeTaskAsComplete(){
        const taskText = this.element.querySelector("p");

        taskText.classList.toggle("as-complete");

        const isComplete = taskText.classList.contains("as-complete");
        let status =  "";
        isComplete  ? status = "done" : status = null;

        let taskes = JSON.parse(window.localStorage.getItem("Taskes") || "[]");
        for(let i = 0 ; i < taskes.length ; i++){
            if(taskes[i].name == taskText.textContent){
                taskes[i].status = status ;
            }
        }

        window.localStorage.setItem("Taskes" , JSON.stringify(taskes )) ;
        displayNumberOfActiveTasks()
    }
    RemoveEvent(){
        this.element.remove() ;
        let taskes = JSON.parse(window.localStorage.getItem("Taskes") || "[]");
        
        const taskText = this.element.querySelector("p").textContent;
        for(let i = 0 ; i < taskes.length ; i++){
            if(taskes[i].name == taskText){
                taskes.splice(i , 1)
            }
        }
        window.localStorage.setItem("Taskes" , JSON.stringify(taskes )) ;
        displayNumberOfActiveTasks()
    }
    

}

