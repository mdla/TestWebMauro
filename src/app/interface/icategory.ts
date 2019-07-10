import { ISkill } from './iskill';


export interface ICategory {
    id:          string;
    title:       string;
    description: string;
    image:       string;
    skills:      ISkill[];
}
