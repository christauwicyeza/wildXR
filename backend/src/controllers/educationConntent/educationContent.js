import EducationContent from "../../models/educationModel.js";
import { create, getAll, updateController, getOne } from "../globalControllers.js";

export const createEducation = create(EducationContent);
export const getEducation = getAll(EducationContent);
export const updateEducation = updateController(EducationContent);
export const oneEducation = getOne(EducationContent);