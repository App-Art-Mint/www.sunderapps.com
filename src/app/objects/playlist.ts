import { Video } from './video';

export class Playlist {
    constructor (
        public name:string,
        public url:string,
        public image:string,
        public videos:Video[]
    ) {}
}
