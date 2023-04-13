import React from 'react';
import { JoinedMissions } from './mission';
import { ReserveDragons } from './dragon';

function Profile() {
  return (
    <div>
      <div className="my_dragons">
        <h2>My Dragons</h2>
        <ul className="dragons_list">
          <ReserveDragons />
        </ul>
      </div>
      <div className="my_missions">
        <h2>My Mission</h2>
        <JoinedMissions />
      </div>
    </div>
  );
}
export default Profile;
