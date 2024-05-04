import { Request, Response } from "express";
import { getUserRepo, createUserRepo, updateUserRepo, deleteUserRepo } from "../repositories/user.repository";
import { IUserInterface } from "../database/interfaces/user.interface";

export const getUserController = async (req: Request, res: Response) =>
{
    const userId = req.query.userId as string;

    try {

        const user = await getUserRepo(userId);
        if (user) {
            res.status(200).json({ "data":user });

        }
        else {
            res.status(404).json({ "error": "User not found" });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}
    


export const createUserController = async (req: Request, res: Response) =>
{
    const user : IUserInterface = req.body;

    try {

        const success = await createUserRepo(user);
        if (success) {
            res.status(200).json({ "data":user });

        }
        else {
            res.status(404).json({ "error": "User not found" });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}
    



export const updateUserController = async (req: Request, res: Response) =>
{
    const updatedUser : IUserInterface = req.body;

    try {

        const success = await updateUserRepo(updatedUser.uid ,updatedUser);
        if (success) {
            res.status(200).json({ "data":"User updated successfully" });

        }
        else {
            res.status(404).json({ "error": "User not Updated" });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}
    

export const deleteUserController = async (req: Request, res: Response) =>
{
   const userId = req.query.userId as string;

    try {

       const success = await deleteUserRepo(userId);
        if (success) {
            res.status(200).json({ "data":"User deleted successfully" });

        }
        else {
            res.status(404).json({ "error": "User not Deleted " });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}