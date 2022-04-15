function ex2(worker){

    if(worker.dizziness){
        worker.levelOfHydrated+= 0.1*worker.weight*worker.experience;
        worker.dizziness=false;
    }

   return worker;

    // const modifiedWorker={
    //     weight: worker.weight,
    //     experience: worker.experience,
    //     levelOfHydrated: worker.levelOfHydrated,

    // }


}

console.log(ex2({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  
  ));