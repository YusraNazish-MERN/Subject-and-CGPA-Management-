import { SubjectItem } from './SubjectItem';

export const SubjectList = ({ subjects, onEdit, onDelete }) => {
  return (
    <div className="table-responsive mb-4">
      <table className="table table-bordered text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Credits</th>
            <th>Instructor</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-muted">No subjects added yet.</td>
            </tr>
          ) : (
            subjects.map(subject => (
              <SubjectItem
                key={subject.id}
                subject={subject}
                onEdit={() => onEdit(subject)}
                onDelete={() => onDelete(subject.id)}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
