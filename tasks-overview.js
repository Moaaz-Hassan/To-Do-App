
import {CreatTask} from "./create-task.js"

export function displayTasksAndOverview(){
    
    let taskes = JSON.parse(window.localStorage.getItem("Taskes") || "[]");
    
    let all = [] ;
    let active = [] ;
    let complete = [] ;
    let activeNumber = 0 ;
    for(let i = 0 ; i < taskes.length ; i++){
        const task_name =  taskes[i].name ;
        const status =  taskes[i].status ;

        all.push({name: task_name, status:status})

        if(status != "done"){
            active.push({name: task_name, status:status});
            activeNumber++ ;
        }
        else{
            complete.push({name: task_name, status:status});
        }
    }
    return {all : all , active : active , complete : complete , activeNumber : activeNumber}
}




export function clearContainer(){
    document.querySelector(".task-container").innerHTML = "";
}

export function displayAllTasks (){
    
    let tasksOverview = displayTasksAndOverview()

    
    clearContainer()
    document.querySelector(".all").classList.add("cleackted-teaxt")
    document.querySelector(".active").classList.remove("cleackted-teaxt")
    document.querySelector(".completed").classList.remove("cleackted-teaxt")

    for(let i = 0 ; i < tasksOverview.all.length ; i++){
        const task_name =  tasksOverview.all[i].name ;
        const task_status =  tasksOverview.all[i].status ;

        const taskDive = new CreatTask(task_name , { save: false }) ;
        if(task_status == "done"){
            taskDive.MakeTaskAsComplete()
        }
        document.querySelector(".task-container").appendChild(taskDive.element) ;
    
    }
}


export function displayActiveTasks (){
    
    let tasksOverview = displayTasksAndOverview()
    
    
    clearContainer() ;
    document.querySelector(".all").classList.remove("cleackted-teaxt")
    document.querySelector(".active").classList.add("cleackted-teaxt")
    document.querySelector(".completed").classList.remove("cleackted-teaxt")

    for(let i = 0 ; i < tasksOverview.active.length ; i++){
        const task_name =  tasksOverview.active[i].name ;
        const task_status =  tasksOverview.active[i].status ;

        const taskDive = new CreatTask(task_name , { save: false }) ;
        if(task_status == "done"){
            taskDive.MakeTaskAsComplete()
        }
        document.querySelector(".task-container").appendChild(taskDive.element) ;
    
    }
}

export function displayCompleteTasks (){
    
    let tasksOverview = displayTasksAndOverview()
    
    
    clearContainer()
    document.querySelector(".all").classList.remove("cleackted-teaxt")
    document.querySelector(".active").classList.remove("cleackted-teaxt")
    document.querySelector(".completed").classList.add("cleackted-teaxt")

    for(let i = 0 ; i < tasksOverview.complete.length ; i++){
        const task_name =  tasksOverview.complete[i].name ;
        const task_status =  tasksOverview.complete[i].status ;

        const taskDive = new CreatTask(task_name , { save: false }) ;
        if(task_status == "done"){
            taskDive.MakeTaskAsComplete()
        }
        document.querySelector(".task-container").appendChild(taskDive.element) ;
    
    }
}

export function displayNumberOfActiveTasks(){
    
    let tasksOverview = displayTasksAndOverview()
    let activeNumber = tasksOverview.activeNumber ;

    document.querySelector(".number-of-item").textContent = activeNumber ;


}

export function clearCompletedTasks (){
    
    // let tasksOverview = displayTasksAndOverview()
    let taskes = JSON.parse(window.localStorage.getItem("Taskes") || "[]");
    let all = [] ;
    clearContainer()

    for(let i = 0 ; i < taskes.length ; i++){

        if(taskes[i].status != "done"){
            all.push({name: taskes[i].name, status:null})
        }
    
    }
    window.localStorage.setItem("Taskes" , JSON.stringify(all )) ;
    displayAllTasks()
}
