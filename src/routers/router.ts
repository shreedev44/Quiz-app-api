import { Router } from "express";
import controller from "../controller/controller";
const router = Router()


router.post("/add-question", controller.addQuestion)

router.get("/get-questions/:category", controller.getQuestions)

router.get("/get-categories", controller.getCategories)


export default router