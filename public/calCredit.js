let wCreditCount = { have: 0, need: 6 };
let eCreditCount = { have: 0, need: 3 };
let tCreditCount = { have: 0, need: 5 };
let lCreditCount = { have: 0, need: 13 };
let aCreditCount = { have: 0, need: 3 };

const editRow = (creditCount, credit, type) => {
  creditCount.have += credit;
  creditCount.need -= credit;
  const nodeLists = type.childNodes;
  nodeLists[3].innerHTML = creditCount.have;
  if (creditCount.need > 0) {
    nodeLists[7].innerHTML = `ขาดอีก ${creditCount.need} หน่วยกิต`;
  } else {
    nodeLists[7].innerHTML = "หน่วยกิตครบแล้ว";
  }

  return creditCount;
}

export const calCredit = (type, credit) => {
  const wellness = document.getElementById("wellness");
  const entrepreneurship = document.getElementById("entrepreneurship");
  const thaiCitizenAndGlobalCitizen = document.getElementById("thaiCitizenAndGlobalCitizen");
  const languageAndComunication = document.getElementById("languageAndComunication");
  const aesthetics = document.getElementById("aesthetics");

  switch (type) {
    case "wellness":
      wCreditCount = editRow(wCreditCount, credit, wellness);
      break;
    case "entrepreneurship":
      eCreditCount = editRow(eCreditCount, credit, entrepreneurship);
      break;
    case "thaiCitizenAndGlobalCitizen":
      tCreditCount = editRow(tCreditCount, credit, thaiCitizenAndGlobalCitizen);
      break;
    case "languageAndComunication":
      lCreditCount = editRow(lCreditCount, credit, languageAndComunication);
      break;
    case "aesthetics":
      aCreditCount = editRow(aCreditCount, credit, aesthetics);
      break;
  }
}