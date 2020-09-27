import { Action } from 'src/app/objects/action'

export class Contribution {
    constructor (
        public title:string,
        public actions:Action[],
        public description?:string
    ) {}
}
