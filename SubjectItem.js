export const SubjectItem = ({ subject, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{subject.subjectName}</td>
      <td>{subject.subjectCode}</td>
      <td>{subject.creditHours}</td>
      <td>{subject.instructor}</td>
      <td>{subject.grade}</td>
      <td>
        <div className="btn-group">
          <button className="btn btn-sm btn-warning" onClick={onEdit}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
};
