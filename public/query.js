import { getDocs, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

export const getSubjects = async (db) => {
  const col = collection(db, "subjects");
  const docSnaps = await getDocs(col);
  const subjects = [];
  docSnaps.forEach(docSnap => {
    subjects.push(docSnap.data());
  });
  return subjects;
}

export const getSubject = async (db, code) => {
  const docRef = doc(db, "subjects", code);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}