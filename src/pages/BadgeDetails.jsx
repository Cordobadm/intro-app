import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import Badge from "../component/Badge";
import BadgeHero from "../component/BadgeHero";

export default function BadgeDetails(props) {
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

  
  return (
    <>
      <div>
        <BadgeHero />
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-6">
            <Badge
              firstName={state.form.firstName}
              lastName={state.form.lastName}
              infoJob={state.form.infoJob}
              twitter={state.form.twitter}
              email={state.form.email}
              avatarUrl="http:\/\/0.gravatar.com\/avatar\/cd699361e60392e6c2e729ed9fa9a133"
            />
          </div>
          <div className="col-6">
              <h3>Acciones</h3>
              <Link to={`/badges/${badgeId}/edit`} className="btn btn-Info mb-3">Editar</Link>
              <button className="btn btn-danger">Eliminar</button>
              {reactDom.createPortal(<h3>Soy un Portal</h3>, document.getElementById("modal"))}
          </div>
        </div>
      </div>
    </>
  );
}
