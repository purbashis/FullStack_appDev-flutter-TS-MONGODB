import { Request, Response } from "express";
import { getTweetRepo, createTweetRepo, updateTweetRepo, deleteTweetRepo } from "../repositories/tweet.repository";
import { ITweetInterface } from "../database/interfaces/tweet.interface";

export const getTweetController = async (req: Request, res: Response) =>
{
    const tweetId = req.query.tweetId as string;

    try {

        const tweet = await getTweetRepo(tweetId);
        if (tweet) {
            res.status(200).json({ "data":tweet });

        }
        else {
            res.status(404).json({ "error": "Tweet not found" });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}
    


export const createTweetController = async (req: Request, res: Response) =>
{
    const tweet : ITweetInterface = req.body;

    try {

        const success = await createTweetRepo(tweet);
        if (success) {
            res.status(200).json({ "data":tweet });

        }
        else {
            res.status(404).json({ "error": "Tweet not found" });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}
    



export const updateTweetController = async (req: Request, res: Response) =>
{
    const updatedTweet : ITweetInterface = req.body;

    try {

        const success = await updateTweetRepo(updatedTweet.tweetId ,updatedTweet);
        if (success) {
            res.status(200).json({ "data":"Tweet updated successfully" });

        }
        else {
            res.status(404).json({ "error": "Tweet not Updated" });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}
    

export const deleteTweetController = async (req: Request, res: Response) =>
{
   const tweetId = req.query.tweetId as string;

    try {

       const success = await deleteTweetRepo(tweetId);
        if (success) {
            res.status(200).json({ "data":"Tweet deleted successfully" });

        }
        else {
            res.status(404).json({ "error": "Tweet not Deleted " });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
        
    }

}