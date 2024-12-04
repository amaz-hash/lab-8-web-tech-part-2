import React from "react";
import UserInfo from './files/js/Userinfo';
import './files/styles/Userinfo.css';
import Statistics from './files/js/Statistics';
import './files/styles/Statistics.css';
import Messages from './files/js/Mesaages'
import './files/styles/Userinfo.css';
import './App.css';

function App() {

  const userData = {
    name: "Pikachu Khan",
    email: "Pikachu.khan@gmail.com",
    role: "Administrator",
    profilePicture: "https://preview.redd.it/yeat-cat-i-made-v0-26w7muek6jx81.png?width=1080&crop=smart&auto=webp&s=caf629a2d40c2fe546a768f3360853eb285ac6cc",
  };
  const statisticsData = {
    totalUsers : 400,
    activeUsers : 100,
    newSignups : 50,
    activePercentage: (100 / 400) * 100,
  };
  const messagesData = [
    "Welcome to the dashboard Pikahcu !",
    "System maintenance scheduled for tomorrow.",
    "New feature updates available.",
  ];

  return (
    <div className="dashboard">
      <UserInfo user={userData} />
      <Statistics stats={statisticsData} />
      <Messages messages={messagesData} />
    </div>
  );
}

export default App;
