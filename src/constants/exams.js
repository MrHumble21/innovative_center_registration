const exams = [
  "Pre A1 Starters",
  "A1 Movers",
  "A2 Flyers",
  "A2 Key",
  "B1 Preliminary",
  "B1 Preliminary for Schools",
  "B2 First",
  "B2 First for Schools",
  "C1 Advanced",
  "C2 Proficiency",
  "Delta Module One",
  "TKT",
  "Linguaskill",
  "IELTS Mock",
];

export const ExamNames = exams.map((e, i) => {
  let exam = {
    name: e,
    id: i + 1,
  };

  return exam;
});
