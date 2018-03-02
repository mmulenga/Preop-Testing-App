import assert from '@/main';
import { Condition, Exam } from '@/constants';

/**
 * This is the internal collection where all exam information will be saved to.
 * Do not export this or attempt to access it externally!
 */
const examCollection = {};
examCollection.exams = {};
examCollection.conditionalExams = {};

/**
 * Adds a new global exam to the system.
 * Not to be called outside this file!
 * @param {String} name The name of the condition
 * @param {String[]} exams The name of the exams required
 * Preconditons: Name and Exams must all be from the Constants file
 * Postconditions: The global examCollection object will be extended to include the new exams
 */
function addExams(name, exams) {
  assert(name in Condition, `Unknown condition ${name} used for Tag`);
  for (let i = 0; i < exams.length; i += 1) {
    assert(exams[i] in Exam, `Unknown exam ${exams[i]} used for Tag`);
  }
  examCollection.exams[name] = exams;
}

/**
 * Adds a new global exam to the system.
 * Not to be called outside this file!
 * @param {String} name The name of the condition
 * @param {Object} conditionalExams A mapping of requirements to their conditional exams
 *    Format for conditionalExams:
 *    { requirementName: [examNames] }
 * Preconditons: Name and requirements/exams must all be from the Constants file
 * Postconditions: The global examCollection object will be extended to include
 *                 the new conditional exams
 */
function addConditionalExams(name, conditionalExams) {
  // TODO: Assertions!
  examCollection.conditionalExams[name] = conditionalExams;
}

/**
 * Adds a new global tag to the system.
 * This is to be used for setting up the knowledge base required for a Preop recommendation.
 * If the need for an examination is dependent on a certain condition, it may be passed in:
 * @param {String} name The name of the condition
 * @param {String[]} exams The names of the exams required
 * @param {Object} conditionalExams (optional) A mapping of requirements to their conditional exams
 *    Format for conditionalExams:
 *    { requirementName: [examNames] }
 * Preconditons: Name and Exams must all be from the Constants file
 * Postconditions: The global examCollection object will be extended to include the new Tag
 */
export function Tag(name, exams, conditionalExams = {}) {
  addExams(name, exams);
  addConditionalExams(name, conditionalExams);
}

/**
 * Returns a summary of all exams required for a given condition name.
 * @param {String} name
 */
export function GetExams(name) {
  assert(name in examCollection, `GetExams called with unknown condition ${name}`);
  if (name in examCollection) {
    return examCollection[name];
  }
  return [];
}

/**
 * Returns a comprehensive summary of the entire knowledge base of the system.
 * This should be used for external access instead of directly referencing examCollection
 */
export function GetAllExams() {
  return examCollection;
}

