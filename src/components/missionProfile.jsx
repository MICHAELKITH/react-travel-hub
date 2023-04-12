import React from 'react';
import { JoinedMissions } from './mission';

function Profile() {
  return (
    <div>
      <div className="my_missions">
        <h2>My Mission</h2>
        <JoinedMissions />
      </div>
    </div>
  );
}
export default Profile;
