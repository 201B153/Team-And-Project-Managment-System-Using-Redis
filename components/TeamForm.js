export default function TeamForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch('/api/teams', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Project_Number" className="form-label">
          Project_Number
        </label>
        <input name="Project_Number" type="text" className="form-control" />

        <label htmlFor="Project_Name" className="form-label">
          Project_Name
        </label>
        <input name="Project_Name" type="text" className="form-control" />

        <label htmlFor="Project_ScreenShot" className="form-label">
          Project_ScreenShot
        </label>
        <input name="Project_ScreenShot" type="text" className="form-control" />

        <label htmlFor="Project_Description" className="form-label">
          Project_Description
        </label>
        <textarea
          name="Project_Description"
          type="text"
          className="form-control"
        />
        <hr />
        <div className="pop">
          <button className="btn btn-primary" type="submit">
            Create Team
          </button>
        </div>
      </form>
    </div>
  );
}
