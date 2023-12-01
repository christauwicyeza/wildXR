import Fact from "../../models/fact.js";
import { create, deleteController, getAll } from "../globalControllers.js";

export const createFact = create(Fact);
export const getFact = getAll(Fact);
export const deleteFact = deleteController(Fact);