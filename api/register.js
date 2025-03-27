import { hash } from "crypto";
import supabase from "./client";

export default async function handler(request, response){
    if (request.method === 'POST') {
        const {username, email, password} = request.body

        //empty data validation
        if(!username || !email || !password){
            return response.status(400).json({error: "Preencha todos os campos"})
        }

        const bcrypt = require('bcrypt')
        const hashPassword = await bcrypt.hash(password, 10)

        const {data, error} = await supabase
            .from("User")
            .insert([{email, username, password: hashPassword}])

        if(error){
            return response.status(500).json({error: error.message})
        }

        return response.status(200).json({message: "Cadastro realizado com sucesso"})
    }

    else{
        response.status(405).json({error: "Método inválido"})
    }
}