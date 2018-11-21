import {Note} from './note.js';
/**
 * Insert Object type `Note` in HTML Elements and add in the HTML document.
 * 
 * @param {Objects} Note 
**/
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
    
    return noteElement;
}

function initialNotes(elementID){
    // var notas = [new Note("Title","Lorem ipsum"),new Note("Title","Lorem ipsum"),new Note("Title","Lorem ipsum"),new Note("Title","Lorem ipsum")];

    // for(let i = 0; i < notas.length; i++){       
    //     document.getElementById(elementID).append(printNote(notas[i]));
    // }
    
    var title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var note = new Note(title,text);
    document.getElementById("submit").addEventListener("click",printNote(note));
}



document.onload = initialNotes("note-board");