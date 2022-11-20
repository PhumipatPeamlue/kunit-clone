import { getSubject } from "./query.js";
import { addSubject } from "./addSubject.js";
import { calCredit } from "./calCredit.js";

export const deleteHandler = (row, type, credit) => {
  row.remove();
  credit = Number(credit[0]);
  calCredit(type, -credit);
}

export const addHandler = async (db, code) => {
  const input = document.getElementById("myInput");
  if (input.value === "") {
    alert("Please enter the subject's code.");
    return;
  }
  const subject = await getSubject(db, code);
  if (subject === undefined) {
    alert("Subject not found.");
    return;
  }

  const tables = document.getElementsByClassName("hideTable");

  if (tables.length != 0) {
    tables[0].removeAttribute("class", "hideTable");
    tables[0].removeAttribute("class", "hideTable");
  }
  addSubject(db, input.value);
  input.value = "";
  let { type, credit } = subject;
  credit = Number(credit[0]);
  calCredit(type, credit);
}