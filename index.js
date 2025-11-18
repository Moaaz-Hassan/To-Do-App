import { CreatTask } from "./create-task.js";
import { displayActiveTasks , displayAllTasks , clearContainer,displayCompleteTasks ,displayNumberOfActiveTasks , clearCompletedTasks} from "./tasks-overview.js";
import { turnModde } from "./activate-dark-mood.js";



turnModde()

// Creat New Task 
document.querySelector(".cheaked").addEventListener("click" , function(){
    const taskName =  document.querySelector(".input input").value ;
    if(taskName){
        const taskDive = new CreatTask(taskName) ;
        document.querySelector(".task-container").appendChild(taskDive.element) ;
        document.querySelector(".input input").value = "" ;

        clearContainer()
        displayAllTasks()
    }

})
document.querySelector(".all").addEventListener("click" , function(){
    displayAllTasks()
})
document.querySelector(".active").addEventListener("click" , function(){
    displayActiveTasks()
})
document.querySelector(".completed").addEventListener("click" , function(){
    displayCompleteTasks()
})
document.querySelector(".clear-completed").addEventListener("click" , function(){
    clearCompletedTasks()
})


displayNumberOfActiveTasks()
displayAllTasks()