import {Note} from './note.js';
/**
 * Insert Object type `Note` in HTML Elements and add in the HTML document.
 * 
 * @param {Objects} Note 
**/
function createNote(){
    let title = document.getElementById("title").value;
    let text = document.getElementById("text").value;

    var note = new Note(title,text);
}
