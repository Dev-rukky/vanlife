import { redirect } from "react-router-dom"

export async function requiredAuth() {
    const isLoggedIn = true
    if (!isLoggedIn) {
        throw redirect("/login?message=You must login first")
    }
}