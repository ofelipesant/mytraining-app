import api from "./api";

export async function getTrainings(){
    try {
        const response = await api.get("/trainings")
        console.log('resposne', response.data)
        return response.data
    } catch (error) {
        console.log(`[getTrainings]: ${error}`)   
    }
}