import { apiConfig } from "./api-config.js"

export async function scheduloNew({id, clientName, when}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify( {id, clientName, when} ),
        })

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        alert("Não foi possível concluir o agendamento. Tente novamente mais tarde");
    }
}