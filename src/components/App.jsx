import React from 'react';
import Profile from './Profile';
import photo from '../photo.png';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={photo} className="Profile-photo" alt="kathmandu"/>
                <Profile
                    linkedin="https://www.linkedin.com/in/hakansel/"
                    twitter="https://twitter.com/hakansel/"
                    github="https://github.com/hakansel/"
                />
            </header>
        </div>
    );
};

export default App;