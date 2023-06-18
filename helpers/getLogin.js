import React from 'react'
import { Account, Client, Databases } from "appwrite"


const getLogin = () => {
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT )
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID )

    const account = new Account(client)
    const databases = new Databases(client)

  return {client , account , databases}

}

export default getLogin