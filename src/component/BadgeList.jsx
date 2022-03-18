import React from "react";
import "../css/badge_list.css";
import Gravatar from "./Gravatar";

export default function BadgeList({ data }) {
  return (
    <div className="BadgesList">
      <ul>
        {data.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem mb-3">
             < Gravatar 
             className="BadgesListItem__avatar"
             email={badge.email}
             />


              {/* <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt="Avatar"
              /> */}
              <div>
                <div>
                  {badge.firstName} {badge.lastName}
                </div>
                <div>{badge.jobTitle}</div>
                <div className="Badge__twitter">@{badge.twitter}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
