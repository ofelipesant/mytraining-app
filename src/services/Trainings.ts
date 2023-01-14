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