let addNoteBtn = document.getElementById("addNote");
let notesContainer = document.getElementById("notes");

// retrieve all notes saved in the local storage
let notesText = JSON.parse(localStorage.getItem("notesText"));
if (notesText) {
  // add all these notes if they exist
  notesText.forEach((note) => addNewNote(note));
}

addNoteBtn.addEventListener("click", () => {
  addNewNote();
});

////////////////// FUNCTIONS //////////////////
function addNewNote(note = "") {
  // add a new note
  let newNote = document.createElement("div");
  newNote.classList.add("note-container");
  newNote.innerHTML = `
        <div class="tool">
        <button class="editeNote"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="removeNote"><i class="fa-regular fa-trash-can"></i></button>
        </div>
        <textarea class="write " >
        </textarea>`;
  notesContainer.appendChild(newNote);
  let textArea = newNote.querySelector("textarea");
  let removeNoteBtn = newNote.querySelector(".removeNote");
  let editNoteBtn = newNote.querySelector(".editeNote");
  textArea.value = note;

  removeNoteBtn.addEventListener("click", () => {
    // remove the note
    newNote.remove();
    updateNotes();
    console.log("removed");
  });

  editNoteBtn.addEventListener("click", () => {
    // edit and save the note
    textArea.classList.toggle("hidden");
    textArea.readOnly == false
      ? (textArea.readOnly = true)
      : (textArea.readOnly = false);
    updateNotes();
    console.log("saved");
  });
}

function updateNotes() {
  // update the notes in the  local storage
  const notes = document.querySelectorAll("textarea");
  const texts = [];
  notes.forEach((text) => {
    texts.push(text.value);
  });

  localStorage.setItem("notesText", JSON.stringify(texts));
}

/////////////////// end of functions /////////////////////////////
