import { getSubject } from "./query.js";
import { deleteHandler } from "./handler.js";

export const addSubject = async (db, subjectCode) => {
  const subject = await getSubject(db, subjectCode);
  const subjectTable = document.getElementById("subjectTable");
  const tr = document.createElement("tr");
  const code = document.createElement("td");
  const name = document.createElement("td");
  const credit = document.createElement("td");
  const deleteBtn = document.createElement("td");
  const deleteText = document.createElement("p");

  code.innerHTML = subject.code;
  name.innerHTML = subject.name;
  credit.innerHTML = subject.credit;
  deleteText.innerHTML = "delete";
  deleteText.addEventListener("click", (e) => {
    deleteHandler(tr, subject.type, subject.credit);
  })
  
  deleteBtn.id = "deleteBtn";
  deleteBtn.appendChild(deleteText);

  tr.appendChild(code);
  tr.appendChild(name);
  tr.appendChild(credit);
  tr.appendChild(deleteBtn);

  subjectTable.appendChild(tr);
}