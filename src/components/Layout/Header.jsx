import React from 'react';
import { StyleFilledWrapper } from '../StyleFilledWrapper';
import { UserPerson2 } from '../../icons/UserPerson2';

export const Header = () => (
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
);