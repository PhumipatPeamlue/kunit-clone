import { getSubject } from "./query.js";
import { deleteHandler } from "./handler.js";

export const addSubject = async (db, subjectCode) => {
  const subject = await getSubject(db, subjectCode);
  const subjectTable = document.getElementById("subjectTable");
  const tr = document.createElement("tr");
  const code = document.createElement("td");
  const name = document.createElement("td");
  const credit = document.createElement("td");
  const div = document.createElement("div");
  const deleteBtn = document.createElement("p");

  code.innerHTML = subject.code;
  name.innerHTML = subject.name;
  credit.innerHTML = subject.credit;
  deleteBtn.innerHTML = "delete";
  deleteBtn.addEventListener("click", (e) => {
    deleteHandler(tr, subject.type, subject.credit);
  })
  
  div.id = "deleteBtn";
  div.appendChild(deleteBtn);

  tr.appendChild(code);
  tr.appendChild(name);
  tr.appendChild(credit);
  tr.appendChild(div);

  subjectTable.appendChild(tr);
}