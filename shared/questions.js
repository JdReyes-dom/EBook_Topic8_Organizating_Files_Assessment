/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 8: A Place for Every File
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What project was Roni looking for when her teacher asked the class to submit an old project?',
    choices: { a: 'Math project', b: 'English project', c: 'Science project', d: 'Art project' },
    correct: 'c'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What was one of the file names Roni used that made it difficult to know what the file contained?',
    choices: { a: 'Science_Project_Roni.docx', b: 'Math_Assignment.docx', c: 'finalfinal.docx', d: 'Roni_Schoolwork.docx' },
    correct: 'c'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You just finished your Math assignment. What is the best way to save it?',
    choices: {
      a: 'Save it in a random folder with any name.',
      b: 'Put it in the Math folder and give it a clear file name.',
      c: 'Save it on the Desktop without changing the file name.',
      d: 'Put it in the Pictures folder with a random name.'
    },
    correct: 'b'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You have many school files on your computer, and they are all mixed together. What should you do?',
    choices: {
      a: 'Leave them as they are and just remember where they are.',
      b: 'Delete the files that are difficult to find.',
      c: 'Organize them into folders and give them clear names.',
      d: 'Move all of them to the Desktop.'
    },
    correct: 'c'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What was the main problem Roni faced in the story?',
    choices: {
      a: 'She did not know how to use a computer.',
      b: 'She could not find her Science project because her files were messy.',
      c: 'She accidentally deleted all of her schoolwork.',
      d: 'She forgot that her teacher gave them a project.'
    },
    correct: 'b'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Which statement best explains what happened in the story?',
    choices: {
      a: 'Roni learned that computers are difficult to use.',
      b: 'Roni learned that keeping files organized makes schoolwork easier.',
      c: 'Roni learned that saving many files is a bad thing.',
      d: 'Roni learned that she should only keep school files on her Desktop.'
    },
    correct: 'b'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Roni decide to organize her computer after finding her Science project?',
    choices: {
      a: 'She wanted to delete her old schoolwork.',
      b: 'She wanted to make her computer look colorful.',
      c: 'She realized that searching through messy files had wasted her time.',
      d: 'Her teacher told her to create new folders.'
    },
    correct: 'c'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Roni had difficulty finding her Science project. What should she have done before her computer became messy?',
    choices: {
      a: 'Saved every file on the Desktop.',
      b: 'Organized her files into folders and used clear file names.',
      c: 'Created more random folders.',
      d: 'Deleted files after finishing them.'
    },
    correct: 'b'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Roni knew that some of her files had random names, but she continued saving them the same way. What could she have done differently?',
    choices: {
      a: 'Renamed the files with clear and meaningful names.',
      b: 'Added more numbers to the file names.',
      c: 'Put all the files in the Pictures folder.',
      d: 'Left the files unnamed.'
    },
    correct: 'a'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Roni spent a lot of time checking unrelated folders before finding her Science project. What does this show about the importance of organizing files?',
    choices: {
      a: 'Organized files take up more computer space.',
      b: 'Organized files make it easier and faster to find what you need.',
      c: 'Organized files are only useful for school projects.',
      d: 'Organizing files means you need fewer files.'
    },
    correct: 'b'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;