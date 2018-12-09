export class Note{
    constructor(title,text){
        this.title = title;
        this.text = text;
        this.date = new Date().toUTCString();
    }
}