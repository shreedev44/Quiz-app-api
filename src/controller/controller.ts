import { Request, Response } from "express";
import Question from "../models/model"



const addQuestion = async (req: Request, res: Response) => {
    try{
        const newQuestion = new Question(req.body)
        const question = await newQuestion.save()
        if(question) res.status(200).json({message: "Question added successfully"})
        else res.status(400).json({message: "Something went wrong"})
    } catch (err) {
        console.log(err)
    }
}

const getQuestions = async (req: Request, res: Response) => {
    try{
        const quiz = await Question.find({category: req.params.category});
        res.status(200).json({quiz})
    } catch(err) {
        console.log(err)
    }
}

const getCategories = async (req: Request, res: Response) => {
    try{
        const categories = await Question.distinct('category')
        res.status(200).json({categories})
    } catch(err) {
        console.log(err)
    }
}


export default {
    addQuestion,
    getQuestions,
    getCategories,
}