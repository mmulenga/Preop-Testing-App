// import Vue from 'vue/dist/vue';
import { Tag, GetExams, GetAllExams } from '@/tag';
import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;
let result;


describe('Testing PatientExamsNeeded() for cardiovascular diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for atrial fibrillation / history of irregular heart beat', () => {
    result = PatientExamsNeeded([Condition.AtrialFib]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('Atrial fibrillation pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for defibriallator / pacemaker', () => {
    result = PatientExamsNeeded([Condition.Defib]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('Defibriallator pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for coronary artery disease', () => {
    result = PatientExamsNeeded([Condition.CAD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('Coronary Artery Disease pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for cardiac stent (< 12 months)', () => {
    result = PatientExamsNeeded([Condition.CardiacStent]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('Cardiac stent (< 12 months) pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of cerebral disease', () => {
    result = PatientExamsNeeded([Condition.CerebralDisease]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });
  it('History of cerebral disease pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of pulmonary vascular disease', () => {
    result = PatientExamsNeeded([Condition.PulmonaryVascular]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('History of pulmonary vascular disease pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for transient ischemic attack (TIA)', () => {
    result = PatientExamsNeeded([Condition.TIA]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('Transient ischemic attack (TIA) pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for stroke', () => {
    result = PatientExamsNeeded([Condition.Stroke]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('Stroke pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for valvular heart disease / valve replacement', () => {
    result = PatientExamsNeeded([Condition.VHD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });
  it('Valvular heart disease / valve replacement pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for heart failure', () => {
    result = PatientExamsNeeded([Condition.HeartFail]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('Heart failure pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for peripheral vasculara disease (PVD)', () => {
    result = PatientExamsNeeded([Condition.PVD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('Peripheral vasculara disease (PVD) pre op exams to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() for pulmonary diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for severe COPD, home oxygen, pulmonary HTN', () => {
    result = PatientExamsNeeded([Condition.PulmDisease]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.CXR);
    expect(result).toEqual(requiredExams);
  });
});

it('set of preop exams for severe COPD, home oxygen, pulmonary HTN to match snapshot', () => {
  expect(result).toMatchSnapshot();
});

describe('Testing PatientExamsNeeded() for other diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for bleeding disorders (hemophiliac | DVT)', () => {
    result = PatientExamsNeeded([Condition.Bleeding]);
    requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for bleeding disorders (hemophiliac | DVT) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of anemia', () => {
    result = PatientExamsNeeded([Condition.Anemia]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for history of anemia to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of active bleeding', () => {
    result = PatientExamsNeeded([Condition.ActiveBleeding]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for history of active bleeding to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for renal disease (on dialysis or at risk for Acute Kidney Injury [AKI])', () => {
    result = PatientExamsNeeded([Condition.Renal]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for renal disease (on dialysis or at risk for Acute Kidney Injury [AKI] to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for diabetes (on Insulin or 2 oral agents)', () => {
    result = PatientExamsNeeded([Condition.Diabetes]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.HbA1C);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for diabetes (on Insulin or 2 oral agents) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for present malignancy / surgery for malignancy', () => {
    result = PatientExamsNeeded([Condition.Malignancy]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.CXR);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for diabetes (on Insulin or 2 oral agents) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for hepatic disease', () => {
    result = PatientExamsNeeded([Condition.Hepatic]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.LFT);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for hepatic disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of adrenal disease', () => {
    result = PatientExamsNeeded([Condition.Adrenal]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for history of adrebal disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of pituitary disease', () => {
    result = PatientExamsNeeded([Condition.Pituitary]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for history of pituitary disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of systemic endocrine disease', () => {
    result = PatientExamsNeeded([Condition.Endocrine]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for history of systemic endocrine disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for thyroid disease or on thyroid supplementation', () => {
    result = PatientExamsNeeded([Condition.Thyroid]);
    requiredExams = new Set();
    requiredExams.add(Exam.TSH);
    expect(result).toEqual(requiredExams);

  it('set of preop exams for thyroid disease or on thyroid supplementation to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });  
});

describe('Testing PatientExamsNeeded() for medication use in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for use of Digoxin', () => {
    result = PatientExamsNeeded([Condition.Digoxin]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of Digoxin to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Lithium', () => {
    result = PatientExamsNeeded([Condition.Lithium]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of Lithium to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Diuretics', () => {
    result = PatientExamsNeeded([Condition.Diuretics]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });
  it('set of preop exams for use of Diuretics to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of ACE-I', () => {
    result = PatientExamsNeeded([Condition.ACEI]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of ACE-I to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of ARB', () => {
    result = PatientExamsNeeded([Condition.ARB]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of ARB to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of NSAIDS', () => {
    result = PatientExamsNeeded([Condition.NSAIDS]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of NSAIDS to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Anticoagulant', () => {
    result = PatientExamsNeeded([Condition.Anticoagulant]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of Anticoagulant to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Antiplatelet (ASA excluded)', () => {
    result = PatientExamsNeeded([Condition.Antiplatelet]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of Antiplatelet (ASA excluded) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of systemic steroid used within 6 months', () => {
    result = PatientExamsNeeded([Condition.Steroid]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.Gluc);
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for use of systemic steroid used within 6 months to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() for no inputs in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for no diseases or medication', () => {
    result = PatientExamsNeeded([]);
    requiredExams = new Set();
    expect(result).toEqual(requiredExams);
  });

  it('set of preop exams for no diseases or medication to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing GetExams() for all cardiovascular diseases in tag.js', () => {
  it('returns the correct array of preop exams for atrial fibrillation', () => {
    result = GetExams(Condition.AtrialFib);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of preo exams for atrial fibrillation to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for defibrillator', () => {
    result = GetExams(Condition.Defib);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for difibrillator to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for coronary artery disease', () => {
    result = GetExams(Condition.CAD);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for coronary artery disease to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for cardiac stent (< 12 months)', () => {
    result = GetExams(Condition.CardiacStent);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for cardiac stent (<12 months) to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for history of cerebral disease', () => {
    result = GetExams(Condition.CerebralDisease);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for history of cerebral disease to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for history of pulmonary vascular disease', () => {
    result = GetExams(Condition.PulmonaryVascular);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });
  it('correct array of examinations for history of pulmonary vascular disease disease to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for transient heart disease', () => {
    result = GetExams(Condition.Stroke);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for transient heart disease to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for transient heart disease (TIA)', () => {
    result = GetExams(Condition.TIA);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for transient heart disease (TIA) to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for valvular heart disease / valve replacement', () => {
    result = GetExams(Condition.VHD);
    requiredExams = ['ECG'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for valvular heart disease / valve replacement to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for heart failure', () => {
    result = GetExams(Condition.HeartFail);
    requiredExams = ['ECG', 'CBC', 'Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for valvular heart failure to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of examinations for peripheral vascular disease (PVD)', () => {
    result = GetExams(Condition.PVD);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for peripheral vascular disease (PVD) to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });
});

describe('Testing GetExams() for all pulmonary diseases in tag.js', () => {
  it('returns the correct array of preop exams for severe COPD, home oxygen, pulmonary HTN', () => {
    result = GetExams(Condition.PulmDisease);
    requiredExams = ['ECG', 'CBC', 'CXR'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of examinations for severe COPD, home oxygen, pulmonary HTN to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });
});

describe('Testing GetExams() for all other diseases in tag.js', () => {
  it('returns the correct array of preop exams for bleeding disorders (hemophiliac | DVT)', () => {
    result = GetExams(Condition.Bleeding);
    requiredExams = ['G&S', 'CBC', 'PTT/INR'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for bleeding disorders (hemophiliac | DVT) to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of anemia', () => {
    result = GetExams(Condition.Anemia);
    requiredExams = ['CBC'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for history of anemia to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of active bleeding', () => {
    result = GetExams(Condition.ActiveBleeding);
    requiredExams = ['CBC'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for history of active bleeding to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for renal disease (on dialysis or at risk of Acute Kidney Injury [AKI])', () => {
    result = GetExams(Condition.Renal);
    requiredExams = ['ECG', 'CBC', 'Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for renal disease (on dialysis or at risk of Acute Kidney Injury [AKI]) to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for diabetes', () => {
    result = GetExams(Condition.Diabetes);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)', 'Gluc', 'HbA1C'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for diabetes to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for present malignancy / surgery for malignancy', () => {
    result = GetExams(Condition.Malignancy);
    requiredExams = ['CBC', 'CXR'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for present malignancy to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for hepatic disease', () => {
    result = GetExams(Condition.Hepatic);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR', 'LFT'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for hepatic disease to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of adrenal disease', () => {
    result = GetExams(Condition.Adrenal);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for history of adrenal disease to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of pituitary disease', () => {
    result = GetExams(Condition.Pituitary);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('returns the correct array of preop exams for history of major systemic endocrine disease', () => {
    result = GetExams(Condition.Endocrine);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for history of major systemic endocrine disease to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for thyroid disease or on thyroid supplementation', () => {
    result = GetExams(Condition.Thyroid);
    requiredExams = ['TSH'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));

    it('correct array of pre op exams for thyroid disease or on thyroid supplementation to match snapshot', () => {
      expect(expect.arrayContaining(result)).toMatchSnapshot();
    });
});

describe('Testing GetExams() for all medication use in tag.js', () => {
  it('returns the correct array of preop exams for use of Digoxin', () => {
    result = GetExams(Condition.Digoxin);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of Digoxin to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Lithium', () => {
    result = GetExams(Condition.Lithium);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of Lithium to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Diuretics', () => {
    result = GetExams(Condition.Diuretics);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of Diuretics to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of ACE-I', () => {
    result = GetExams(Condition.ACEI);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of ACE-I to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of ARB', () => {
    result = GetExams(Condition.ARB);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of ARB to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of NSAIDS', () => {
    result = GetExams(Condition.NSAIDS);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of NSAIDS to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Anticoagulants', () => {
    result = GetExams(Condition.Anticoagulant);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of Anticoagulants to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Antiplatelet (ASA excluded)', () => {
    result = GetExams(Condition.Antiplatelet);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of Antiplatelet (ASA excluded) to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of systemic steroid used within 6 months', () => {
    result = GetExams(Condition.Steroid);
    requiredExams = ['Renal Panel (Creat + Lytes)', 'Gluc'];
    expect(requiredExams).toEqual(expect.arrayContaining(result));
  });

  it('correct array of pre op exams for use of use of systemic steroid used within 6 months to match snapshot', () => {
    expect(expect.arrayContaining(result)).toMatchSnapshot();
  });
});

describe('Testing GetAllExams() in tag.js', () => {
  it('returns correct tag creation when accessing valid name parameter', () => {
    expect(GetAllExams().Stroke).toEqual([Exam.ECG]);
  });

  it('correct tag creation when accessing valid name parameter to match snapshot', () => {
    expect(GetAllExams().Stroke).toMatchSnapshot();
  });

  it('returns correct tag creation when accessing invalid name parameter', () => {
    expect(GetAllExams().DaleDisease).toEqual(undefined);
  });

  it('correct tag creation when accessing invalid name parameter to match snapshot', () => {
    expect(GetAllExams().DaleDisease).toMatchSnapshot();
  });
});

describe('Testing Tag() in tag.js', () => {
  it('returns correct tag creation using GetAllExams()', () => {
    result = Tag('DaleDisease', [Exam.ECG]);
    expect(GetAllExams().DaleDisease).toEqual([Exam.ECG]);
  });

  it('correct tag creation when using GetAllExams() to match snapshot', () => {
    expect(GetAllExams().DaleDisease).toMatchSnapshot();
  });

  it('returns correct tag creation using GetExams()', () => {
    result = Tag('DaleDisease', [Exam.ECG]);
    expect(GetExams('DaleDisease')).toEqual([Exam.ECG]);
  });

  it('correct tag creation when using GetExams() to match snapshot', () => {
    expect(GetExams('DaleDisease')).toMatchSnapshot();
  });
});
