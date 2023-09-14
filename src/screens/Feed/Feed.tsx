import React from "react";
import { InterfaceEssential } from "../../components/InterfaceEssential";
import { Leftsidecard } from "../../components/Leftsidecard";
import { StyleFilledWrapper } from "../../components/StyleFilledWrapper";
import { StyleOutlined1 } from "../../icons/StyleOutlined1";
import { UserPerson2 } from "../../icons/UserPerson2";
import "./style.css";
import { pbClient } from "../../index";

function logout() {
  console.log("logout")
  pbClient.logout();
  console.log(pbClient.user)
}

export const Feed = ({user}): JSX.Element => {
  return (
    <div className="feed">
      <div className="logout">
        <button className="btn btn-primary" onClick={logout}>Logout</button>
      </div>
      <div className="div-2">
        <div className="group">
          <div className="overlap">
            <div className="group-2">
              <div className="div-3" />
              <div className="text-wrapper-2">YALI Team</div>
              <div className="text-wrapper-3">YALI Relations Communications team</div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-2">
                <div className="text-wrapper-5">Share</div>
                <InterfaceEssential share="outlined" />
              </div>
            </div>
            <div className="group-4">
              <div className="element-hours-ago-nairobi">14 hours ago&nbsp;&nbsp;|&nbsp;&nbsp;Nairobi, Kenya</div>
              <img className="vector" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="group-5">
          <div className="overlap">
            <div className="group-6">
              <div className="div-3">
                <UserPerson2 className="user-person" color="white" />
              </div>
              <div className="text-wrapper-2">Real Person</div>
              <div className="text-wrapper-6">Alumni | cohort 13</div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="group-7">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-7">+3</div>
            </div>
            <div className="group-9">
              <div className="overlap-3">
                <StyleOutlined1 className="interface-essential" />
                <div className="text-wrapper-8">connect</div>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-2">
                <div className="text-wrapper-5">Share</div>
                <InterfaceEssential share="outlined" />
              </div>
            </div>
            <div className="group-4">
              <div className="element-hours-ago-nairobi">14 hours ago&nbsp;&nbsp;|&nbsp;&nbsp;Nairobi, Kenya</div>
              <img className="vector" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="group-10">
          <div className="overlap">
            <div className="group-6">
              <div className="div-3">
                <UserPerson2 className="user-person" color="white" />
              </div>
              <div className="text-wrapper-2">Another Person</div>
              <div className="text-wrapper-6">Alumni | cohort 25</div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="group-7">
              <div className="div-wrapper">
                <div className="text-wrapper-4">tagItem</div>
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-7">+3</div>
            </div>
            <div className="group-9">
              <div className="overlap-3">
                <StyleOutlined1 className="interface-essential" />
                <div className="text-wrapper-8">connect</div>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-2">
                <div className="text-wrapper-5">Share</div>
                <InterfaceEssential share="outlined" />
              </div>
            </div>
            <div className="group-4">
              <div className="element-hours-ago-nairobi">14 hours ago&nbsp;&nbsp;|&nbsp;&nbsp;Nairobi, Kenya</div>
              <img className="vector" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <Leftsidecard className="leftsidecard-01" user={user} />
        <div className="overlap-4">
          <div className="group-11">
            <div className="overlap-5">
              <div className="text-wrapper-9">posts</div>
              <StyleFilledWrapper className="interface-essential-home" style="filled" />
            </div>
          </div>
          <div className="group-12">
            <div className="overlap-6">
              <UserPerson2 className="user-person-2" color="black" />
              <div className="text-wrapper-10">profile</div>
            </div>
          </div>
          <div className="overlap-7">
            <p className="text-wrapper-11">Search through posts and YALI alumni</p>
            <img className="img" alt="Vector" src="/img/vector-3.svg" />
          </div>
          <div className="ellipse" />
          <div className="text-wrapper-12">YOUNG AFRICAN LEADERS INITIATIVE</div>
        </div>
      </div>
    </div>
  );
};
