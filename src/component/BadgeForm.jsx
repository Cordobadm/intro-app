import React from "react";

export default function BadgeForm({ handleChange, form_values, handleSubmit }) {
  return (
    <>
      <h1>Nuevo Asistente</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="firstName"
            value={form_values.firstName}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="lastName"
            value={form_values.lastName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            name="email"
            value={form_values.email}
          />
        </div>

        <div className="form-group">
          <label>Job Info</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="infoJob"
            value={form_values.infoJob}
          />
        </div>

        <div className="form-group">
          <label>Twitter</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="twitter"
            value={form_values.twitter}
          />
        </div>
        <button className="btn btn-info  float-end">Enviar</button>
      </form>
    </>
  );
}
