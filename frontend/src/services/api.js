import axios from "axios"

const BASE_URL = "http://127.0.0.1:8000/student/"

// save
// list
// edit
// delete

export async function getAll_StudentAPI(){
    return await axios.get(BASE_URL)
}

export async function new_StudentAPI(data){
    return await axios.post(BASE_URL, data)
}

export async function get_One_StudentAPI(id){
    return await axios.get(BASE_URL + `${id}/`)
}

export async function update_StudentAPI(id, data){
    return await axios.put(BASE_URL + `${id}/`, data)
}

export async function delete_StudentAPI(id){
    return await axios.delete(BASE_URL + `${id}/`)
}