import React, { useState, useEffect } from "react";
import BadgeHero from "../component/BadgeHero";
import BadgeList from "../component/BadgeList";
import { Link } from "react-router-dom";

export default function Badges() {
  const [data, setData] = useState({
    datos: [],
    loading: true,
  });

  useEffect(() => {
    getData();
    return () => {
      
    };
  }, []);

  // Funcion asicrona -- await(espera que se resuelva)
  const getData = async () => {
    const resp = await fetch("http://localhost:3004/data");
    const data = await resp.json();

    setData({
      datos: data,
      loading: false,
    });
  };

  // setTimeout(() => {
  //   setData({
  //     datos: [
  //       {
  //         id: "2de30c43-9deb-40fc-a41f-05e62b5939a7",
  //         firstName: "Freda",
  //         lastName: "Grady",
  //         email: "Leann_Berge@gmail.com",
  //         jobTitle: "Legacy Brand Director",
  //         twitter: "FreeGrady22221-7573",
  //         avatarUrl:
  //           "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
  //       },
  //       {
  //         id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
  //         firstName: "Major",
  //         lastName: "Rodriguez",
  //         email: "Ilene66@hotmail.com",
  //         jobTitle: "Human Research Architect",
  //         twitter: "ajorRodriguez",
  //         avatarUrl:
  //           "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
  //       },
  //       {
  //         id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
  //         firstName: "Daphney",
  //         lastName: "Torphy",
  //         email: "Ron61@hotmail.com",
  //         jobTitle: "National Markets Officer",
  //         twitter: "DaphneyThorpy9621",
  //         avatarUrl:
  //           "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
  //       },
  //     ],
  //   });
  // }, 2000);
  return (
    <>
      <BadgeHero />
      <div className="container">
        <div className="row mb-3">
          <div className="col-6 offset-3">
            <Link to="/badges/new" className="btn btn-info float-end ">
              Nuevo Ingreso
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-3">
            {data.loading ? (
              <h3>Loading ...</h3>
            ) : (
              <BadgeList data={data.datos} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
