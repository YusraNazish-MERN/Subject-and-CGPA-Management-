import gradeScale from '../utils/gradeScale';

export const CGPA = ({ subjects }) => {
  const totalCredits = subjects.reduce((sum, s) => sum + Number(s.creditHours), 0);
  const totalPoints = subjects.reduce(
    (sum, s) => sum + (gradeScale[s.grade] || 0) * Number(s.creditHours),
    0
  );
  const cgpa = totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);

  return (
    <div className="alert alert-primary text-center">
      <h5>Your Calculated CGPA: <strong>{cgpa}</strong></h5>
    </div>
  );
};
