import { v4 as uuidv4 } from "uuid";

export function generateCode() {
  return uuidv4().split("-")[0].toUpperCase();
}
