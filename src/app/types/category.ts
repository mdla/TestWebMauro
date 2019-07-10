import { Skill } from './skill';
import { ICategory } from '../interface/icategory';

export class Category implements ICategory {
    title: string;
    image: string;
    id: string;    description: string;
    skills: import("../interface/iskill").ISkill[];
}
