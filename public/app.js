import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getSubjects, getSubject } from "./query.js";
import { autocomplete } from "./autocomplete.js";
import { addHandler } from "./handler.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOvaTLTnZFPlwBtGAJsSVkaynSQNnFXKQ",
  authDomain: "kunit-clone.firebaseapp.com",
  projectId: "kunit-clone",
  storageBucket: "kunit-clone.appspot.com",
  messagingSenderId: "885488373304",
  appId: "1:885488373304:web:b2826f94a62939f6ba20cd",
  measurementId: "G-L8JZRMNN0P"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const doAutocomplete = async (db) => {
  let subjects = await getSubjects(db);
  autocomplete(document.getElementById("myInput"), subjects);
}

doAutocomplete(db);

document.getElementById("addBtn").addEventListener("click", (e) => {
  const code = document.getElementById("myInput").value;
  addHandler(db, code);
})