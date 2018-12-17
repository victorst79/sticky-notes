import {Note} from './js/note.js';

var notes = [];
var idNotes = 0;

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


    noteElement.addEventListener("click", () => {
        deleteNote(Note.id);
    });
}

function deleteNote(idNote){
    notes[idNote].remove;
    document.getElementById("note-table").removeChild(document.getElementsByClassName("note")[idNote-1]);
}

document.getElementById("create").addEventListener("click",() => {
    var note = new Note(idNotes,document.getElementById("title").value,document.getElementById("text").value);
    notes.push(note);
    console.log(notes);
    printNote(note);
    idNotes++;
});
