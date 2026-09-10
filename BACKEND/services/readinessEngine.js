// ==========================================
// SUBMISSION READINESS ENGINE
// ==========================================

const calculateReadiness = ({
  tasksProgress,
  checklistProgress,
  teamProgress,
  finalFileProgress,
  readmeProgress
}) => {

  // ==========================================
  // WEIGHTS
  // ==========================================

  const taskWeight = 30;
  const checklistWeight = 25;
  const teamWeight = 15;
  const finalFileWeight = 20;
  const readmeWeight = 10;


  // ==========================================
  // WEIGHTED CALCULATION
  // ==========================================

  const score =
    (tasksProgress * taskWeight / 100) +
    (checklistProgress * checklistWeight / 100) +
    (teamProgress * teamWeight / 100) +
    (finalFileProgress * finalFileWeight / 100) +
    (readmeProgress * readmeWeight / 100);


  // Round score
  const finalScore = Math.round(score);


  // ==========================================
  // STATUS
  // ==========================================

  let status;
  let canSubmit;


  if (finalScore >= 90) {

    status = "READY TO SUBMIT";
    canSubmit = true;

  } else if (finalScore >= 70) {

    status = "ALMOST READY";
    canSubmit = false;

  } else {

    status = "NOT READY";
    canSubmit = false;

  }


  // ==========================================
  // RETURN RESULT
  // ==========================================

  return {

    score: finalScore,

    status: status,

    canSubmit: canSubmit

  };

};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
  calculateReadiness
};