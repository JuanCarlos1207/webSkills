'use client';
import React, { useState, Suspense } from 'react';
import ProfileInfo from './Profile_info';

export default function UpdateProf() {
    const [Profile, setProfile] = useState({
        name: '',
        email: '',
    });

    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile(form);

        // reset form
        setForm({
            name:'',
            email:'',
        });
        
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfileInfo profile={Profile} />
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name || ''}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md"
                />
                <button type="submit" className="p-3 bg-blue-500 text-white rounded-md">Update</button>
            </form>
        </Suspense>
    );
}
