import {Note} from './js/note.js';

var notes = [];

function printNote(Note){
    var noteElement = document.createElement("div");
    var titleElement = document.createElement("h3");
    var textElement = document.createElement("p");
    var dateElement = document.createElement("small");

    titleElement.innerText = Note.title;
    textElement.innerText = Note.text;
    dateElement.innerText = Note.date;

    noteElement.append(titleElement);
    noteElement.append(textElement);
    noteElement.append(dateElement);
    noteElement.setAttribute("class","note");

    document.getElementById("note-table").append(noteElement);
}


document.getElementById("create").addEventListener("click",() => {
    var note = new Note(document.getElementById("title").value,document.getElementById("text").value);
    notes.push(note);
    console.log(notes);
    printNote(note);
});

document.getElementsByClassName("note").addEventListener("click",() => {
    console.log("entra");
});
