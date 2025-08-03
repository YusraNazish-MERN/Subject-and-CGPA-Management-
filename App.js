import { useState } from 'react';
import { SubjectForm } from './components/SubjectForm';
import { SubjectList } from './components/SubjectList';
import { CGPA } from './components/CGPA';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [editSubject, setEditSubject] = useState(null);

  const addSubject = (subject) => {
    setSubjects(prev => [...prev, { ...subject, id: Date.now() }]);
  };

  const updateSubject = (updatedSubject) => {
    setSubjects(prev =>
      prev.map(sub => (sub.id === updatedSubject.id ? updatedSubject : sub))
    );
    setEditSubject(null);
  };

  const deleteSubject = (id) => {
    setSubjects(prev => prev.filter(sub => sub.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Subject & CGPA Manager</h2>
      <SubjectForm
        onAdd={addSubject}
        onUpdate={updateSubject}
        editing={editSubject}
      />
      <SubjectList
        subjects={subjects}
        onEdit={setEditSubject}
        onDelete={deleteSubject}
      />
      <CGPA subjects={subjects} />
    </div>
  );
};

export default App;
