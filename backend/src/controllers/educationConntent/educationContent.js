import EducationContent from "../../models/educationModel.js";
import { create, getAll } from "../globalControllers.js";

export const createEducation = create(EducationContent);
export const getEducation = getAll(EducationContent);