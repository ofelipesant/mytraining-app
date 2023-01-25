import api from "./api";

export async function getTrainings(){
    try {
        const response = await api.get("/trainings")
        return response.data
    } catch (error) {
        console.log(`[getTrainings]: ${error}`)   
    }
}

export async function getTrainingsById(id:string){
    try{
        const response = await api.get(`/trainings/${id}`)
        return response.data
    } catch(error){
        console.log(`[getTrainingsById]: ${error}`)
    }
}

export async function deleteTraining(id:string){
    try{
        await api.delete(`/trainings/${id}`)
        return
    } catch(error){
        console.log(`[deleteTraining]: ${error}`)
    }
}

export async function createTraining(data){
    try{
        const request = await api.post("/trainings", data)
        return request
    } catch(error){
        console.log(`[createTraining]: ${error}`)
    }
}