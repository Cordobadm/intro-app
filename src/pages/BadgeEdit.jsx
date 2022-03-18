import React, { useState, useEffect } from "react";

import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";
import BadgeHero from "../component/BadgeHero";

export default function BadgeEdit(props) {
  const badgeId = props.match.params.badgeId;
  const [state, setState] = useState({
    form: {
      firstName: "",
      lastName: "",
      infoJob: "",
      twitter: "",
      email: "",
    },
  });

  useEffect(() => {
    getDataId();
  }, []);

  const getDataId = async () => {
    try {
      const resp = await fetch(`http://localhost:3004/data?id=${badgeId}`);
      const data = await resp.json();
      console.log(data);
      setState({
        form: data[0],
      });
    } catch (error) {
      console.warn(error);
    }
  };
  const handleChange = (evento) => {
    setState({
      form: {
        ...state.form,
        [evento.target.name]: evento.target.value,
      },
    });
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    try {
      fetch(`http://localhost:3004/data?id=${badgeId}`, {
        method: "PUT",
        body: JSON.stringify(state.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <div>
        <BadgeHero />
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-6">
            <Badge
              firstName={state.form.firstName || "Firste_Name"}
              lastName={state.form.lastName || "Last_Name"}
              infoJob={state.form.infoJob || "Info_Job"}
              twitter={state.form.twitter || "Twitter"}
              email={state.form.email}
              avatarUrl="http:\/\/0.gravatar.com\/avatar\/cd699361e60392e6c2e729ed9fa9a133"
            />
          </div>
          <div className="col-6">
            <BadgeForm
              handleChange={handleChange}
              form_values={state.form}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
