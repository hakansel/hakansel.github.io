import React from 'react';
import './Profile.css';

interface ProfileProps {
    linkedin: string;
    twitter: string;
    github: string;
}

const Profile: React.FC<ProfileProps> = ({linkedin, twitter, github}) => {
    return (
        <div className="Profile">
            <p>
                Hi, my name is Hakan Akansel, I'm a software engineer.
            </p>
            <ul>
                <li>
                    <a href={github} target="_blank" rel="noreferrer"><code>GitHub</code></a>
                </li>
                <li>
                    <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href={twitter} target="_blank" rel="noreferrer">@hakansel</a>
                </li>
            </ul>
        </div>
    );
};

export default Profile;