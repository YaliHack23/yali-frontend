import React from "react";
import { InterfaceEssential } from "../../components/InterfaceEssential";
import { StyleFilled } from "../../icons/StyleFilled";
import { UserPerson } from "../../icons/UserPerson";
import { UserPerson1 } from "../../icons/UserPerson1";
import "./style.css";

export const EditMyProfile = (): JSX.Element => {
  return (
    <div className="edit-MY-profile">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="text-wrapper">account: musa@gmail.com</div>
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="ellipse" />
              <UserPerson className="user-person" />
              <div className="ellipse-2" />
              <img className="vector" alt="Vector" src="/img/vector-3.svg" />
            </div>
          </div>
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Update profile details</div>
            </div>
          </div>
          <div className="group-2">
            <p className="text-wrapper-3">Pick your occupation from the options below:</p>
            <div className="overlap-2">
              <div className="text-wrapper-4">Designer and Cinematographer</div>
              <div className="rectangle-2" />
              <StyleFilled className="arrows-chevron-arrow" color="#333333" />
            </div>
          </div>
          <p className="p">How would you like fellow alumni and partners to connect with you?</p>
          <div className="group-3">
            <div className="text-wrapper-5">Facebook:</div>
            <img className="img" alt="Vector" src="/img/vector-1.svg" />
            <div className="overlap-3">
              <div className="text-wrapper-6">facebook.com/musa</div>
              <div className="rectangle-3" />
            </div>
          </div>
          <div className="group-4">
            <div className="text-wrapper-5">LinkedIn</div>
            <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
            <div className="overlap-3">
              <div className="text-wrapper-6">linkedin.com/musa</div>
              <div className="rectangle-3" />
            </div>
          </div>
          <div className="group-5">
            <p className="text-wrapper-3">Your current employer / company</p>
            <div className="overlap-2">
              <div className="text-wrapper-6">Example company</div>
              <div className="rectangle-2" />
            </div>
          </div>
          <div className="group-6">
            <p className="enter-your-interests">
              <span className="span">
                Enter your interests:
                <br />
              </span>
              <span className="text-wrapper-7">
                This will help fellow alumni and partners reach you based on your interests
              </span>
            </p>
            <div className="overlap-4">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-8">interest</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-8">interest</div>
                </div>
              </div>
              <div className="text-wrapper-9">Add more</div>
              <div className="rectangle-2" />
            </div>
          </div>
          <div className="group-7">
            <div className="text-wrapper-3">Where do you reside?</div>
            <div className="overlap-5">
              <div className="text-wrapper-6">Kenya</div>
              <div className="rectangle-4" />
              <StyleFilled className="style-filled" color="#333333" />
            </div>
            <p className="text-wrapper-10">Pick a country from the list:</p>
            <div className="overlap-6">
              <div className="text-wrapper-6">Nairobi</div>
              <div className="rectangle-5" />
            </div>
            <div className="text-wrapper-11">City:</div>
          </div>
          <div className="group-8">
            <div className="text-wrapper-3">Enter your cohort details</div>
            <div className="overlap-5">
              <div className="text-wrapper-6">Cohort 13</div>
              <div className="rectangle-4" />
              <StyleFilled className="style-filled" color="#333333" />
            </div>
            <p className="text-wrapper-10">Pick your cohort from the list:</p>
            <div className="overlap-6">
              <div className="text-wrapper-6">Kenya</div>
              <div className="rectangle-5" />
              <StyleFilled className="arrows-chevron-arrow-down-3" color="#333333" />
            </div>
            <p className="text-wrapper-11">Pick your country from the list:</p>
          </div>
          <div className="group-9">
            <div className="text-wrapper-3">Your names</div>
            <div className="overlap-5">
              <div className="text-wrapper-6">Musa</div>
              <div className="rectangle-4" />
            </div>
            <div className="text-wrapper-10">First name:</div>
            <div className="overlap-6">
              <div className="text-wrapper-6">Person</div>
              <div className="rectangle-5" />
            </div>
            <div className="text-wrapper-11">Last name:</div>
          </div>
          <img className="line" alt="Line" src="/img/line-2.svg" />
          <img className="line-2" alt="Line" src="/img/line-2.svg" />
        </div>
        <div className="overlap-7">
          <div className="group-10">
            <div className="overlap-8">
              <InterfaceEssential className="interface-essential-home" style="outlined" />
              <div className="text-wrapper-12">posts</div>
            </div>
          </div>
          <div className="group-11">
            <div className="overlap-9">
              <UserPerson1 className="user-person-1" />
              <div className="text-wrapper-13">profile</div>
            </div>
          </div>
          <div className="overlap-10">
            <p className="text-wrapper-14">Search through posts and YALI alumni</p>
            <img className="vector-3" alt="Vector" src="/img/vector.svg" />
          </div>
          <div className="ellipse-3" />
          <div className="text-wrapper-15">YOUNG AFRICAN LEADERS INITIATIVE</div>
        </div>
      </div>
    </div>
  );
};
