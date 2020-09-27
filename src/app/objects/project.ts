export class Project {
  constructor (
    public id: string,
    public title: string,
    public description: string,
    public company: string,
    public year: number,
    public month: number,
    public image: string,
    public avatar: string,
    public url?: string
  ) {}
}
