import React from "react";
import { InterfaceEssential } from "../../components/InterfaceEssential";
import { StyleOutlined } from "../../icons/StyleOutlined";
import { UserPerson1 } from "../../icons/UserPerson1";
import "./style.css";

export const ViewAlumniProfile = (): JSX.Element => {
  return (
    <div className="view-alumni-profile">
      <div className="div">
        <div className="group">
          <div className="overlap">
            <img className="vector" alt="Vector" src="/img/vector.svg" />
            <img className="img" alt="Vector" src="/img/vector-2.svg" />
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="ellipse" />
              <UserPerson1 className="user-person" />
            </div>
            <div className="text-wrapper">Real Person</div>
            <div className="text-wrapper-2">Alumni | cohort 13</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">interest</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">interest</div>
              </div>
            </div>
            <div className="group-2">
              <div className="div-wrapper">
                <div className="text-wrapper-3">interest</div>
              </div>
            </div>
            <div className="text-wrapper-4">Occupation:</div>
            <div className="text-wrapper-5">Company:</div>
            <div className="text-wrapper-6">Location:</div>
            <div className="text-wrapper-7">Financial Advisor</div>
            <div className="text-wrapper-8">linkedin.com/realperson</div>
            <div className="text-wrapper-9">facebook.com/realperson</div>
            <div className="text-wrapper-10">Example Company</div>
            <div className="text-wrapper-11">Nairobi, Kenya</div>
            <div className="text-wrapper-12">Interests:</div>
            <div className="text-wrapper-13">Connect:</div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="group-3">
            <div className="overlap-3">
              <InterfaceEssential className="interface-essential-home" style="outlined" />
              <div className="text-wrapper-14">posts</div>
            </div>
          </div>
          <div className="group-4">
            <div className="overlap-4">
              <StyleOutlined className="style-outlined" />
              <div className="text-wrapper-15">profile</div>
            </div>
          </div>
          <div className="overlap-5">
            <p className="p">Search through posts and YALI alumni</p>
            <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
          </div>
          <div className="ellipse-2" />
          <div className="text-wrapper-16">YOUNG AFRICAN LEADERS INITIATIVE</div>
        </div>
      </div>
    </div>
  );
};
