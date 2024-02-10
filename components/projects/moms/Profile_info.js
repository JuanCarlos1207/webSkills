// ProfileInfo.js
import React from 'react';

export default function ProfileInfo({ profile }) {
    return (
        <div className="p-3 flex flex-col gap-6">
            <h2 className="text-1xl"><span className='font-bold'>Name:</span> {profile.name}</h2>
            <h2 className="text-1xl"><span className='font-bold'>Email:</span> {profile.email}</h2>
        </div>
    );
}

 