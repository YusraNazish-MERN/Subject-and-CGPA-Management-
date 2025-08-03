import { useState, useEffect } from 'react';

const initialState = {
  subjectName: '',
  subjectCode: '',
  creditHours: 3,
  instructor: '',
  grade: 'A'
};

export const SubjectForm = ({ onAdd, onUpdate, editing }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm(editing ?? initialState);
  }, [editing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editing ? onUpdate(form) : onAdd(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <input
            name="subjectName"
            value={form.subjectName}
            onChange={handleChange}
            className="form-control"
            placeholder="Subject Name"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            name="subjectCode"
            value={form.subjectCode}
            onChange={handleChange}
            className="form-control"
            placeholder="Subject Code"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            name="creditHours"
            type="number"
            value={form.creditHours}
            onChange={handleChange}
            className="form-control"
            placeholder="Credit Hours"
            min="1"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            name="instructor"
            value={form.instructor}
            onChange={handleChange}
            className="form-control"
            placeholder="Instructor"
            required
          />
        </div>
        <div className="col-md-4">
          <select
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className="form-select"
          >
            {["A", "A-", "B+", "B", "C+", "C", "D", "F"].map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <button className="btn btn-success w-100">
            {editing ? 'Update Subject' : 'Add Subject'}
          </button>
        </div>
      </div>
    </form>
  );
};
