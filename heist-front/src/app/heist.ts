import { Member } from "./member";
import { Skill } from "./skill";

export class Heist {
    id: number;
    name: string;
    requiredSkills: Skill[];
    status: string;
    members: Member[]; 
}
