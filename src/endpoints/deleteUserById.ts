import { Request, Response } from "express"
import { db } from "../database/knex";

export const deleteUserById = async (req: Request, res: Response) => {

    try {
        const idToDelete = req.params.id;
        const [user] = await db("users").where({ id: idToDelete })
        if (!user) {
            res.status(404)
            throw new Error("Id not found.")
        }
        await db("users").del().where({ id: idToDelete })
        res.status(200).send("User deleted successfully.")
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        } else {
            res.status(500).send("Unknown error.");
        }
    }
}