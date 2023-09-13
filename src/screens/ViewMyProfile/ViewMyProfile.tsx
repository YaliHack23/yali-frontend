import React from "react";
import { InterfaceEssential } from "../../components/InterfaceEssential";
import { UserPerson } from "../../icons/UserPerson";
import { UserPerson1 } from "../../icons/UserPerson1";
import "./style.css";

export const ViewMyProfile = (): JSX.Element => {
  return (
    <div className="view-MY-profile">
      <div className="div">
        <div className="group">
          <div className="overlap">
            <img className="vector" alt="Vector" src="/img/vector.svg" />
            <img className="img" alt="Vector" src="/img/vector-3.svg" />
            <div className="overlap-group">
              <div className="overlap-2">
                <div className="rectangle" />
                <div className="ellipse" />
                <UserPerson1 className="user-person" />
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-3">
                  <div className="text-wrapper">edit profile</div>
                  <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
                </div>
              </div>
            </div>
            <div className="text-wrapper-2">Mr Musa</div>
            <div className="text-wrapper-3">Alumni | cohort 13</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">interest</div>
              </div>
            </div>
            <div className="group-2">
              <div className="div-wrapper">
                <div className="text-wrapper-4">interest</div>
              </div>
            </div>
            <div className="group-3">
              <div className="div-wrapper">
                <div className="text-wrapper-4">interest</div>
              </div>
            </div>
            <div className="text-wrapper-5">Occupation:</div>
            <div className="text-wrapper-6">Company:</div>
            <div className="text-wrapper-7">Location:</div>
            <div className="text-wrapper-8">Designer and Cinematographer</div>
            <div className="text-wrapper-9">linkedin.com/musa</div>
            <div className="text-wrapper-10">facebook.com/musa</div>
            <div className="text-wrapper-11">Example Company</div>
            <div className="text-wrapper-12">Nairobi, Kenya</div>
            <div className="text-wrapper-13">Interests:</div>
            <div className="text-wrapper-14">Connect:</div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="group-4">
            <div className="overlap-5">
              <InterfaceEssential className="interface-essential-home" style="outlined" />
              <div className="text-wrapper-15">posts</div>
            </div>
          </div>
          <div className="group-5">
            <div className="overlap-6">
              <UserPerson className="style-filled" />
              <div className="text-wrapper-16">profile</div>
            </div>
          </div>
          <div className="overlap-7">
            <p className="p">Search through posts and YALI alumni</p>
            <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
          </div>
          <div className="ellipse-2" />
          <div className="text-wrapper-17">YOUNG AFRICAN LEADERS INITIATIVE</div>
        </div>
      </div>
    </div>
  );
};
