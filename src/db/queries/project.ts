import { db } from "..";

interface Project{
    name?:string;
    title?:string;
    chainId?:string;
    logoUrl?:string;
    theme?:string;
    userId?:string;
    useSmartWallet?:string;
}

export async function addProject(project:Project){
    try {
        const data=await db("projects")
        .insert(project).returning("*")
        return data[0]
    } catch (error) {
        console.error(error)
        throw Error("error in addProject query function")
    }
}