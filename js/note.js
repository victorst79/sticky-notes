export class Note{
    constructor(id,title,text){
        this.id = id;
        this.title = title;
        this.text = text;
        this.date = new Date().toUTCString();
    }
}