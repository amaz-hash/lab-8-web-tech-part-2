import React from "react";

function Statistics({ stats }) {
  const { totalUsers, activeUsers, newSignups, activePercentage } = stats ;

  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <p>Total Users: {totalUsers}</p>
      <p>Active Users: {activeUsers}</p>
      <p>New Signups: {newSignups}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${activePercentage}%` }}
          title={`${activePercentage.toFixed(2)}% Active Users`}
        ></div>
      </div>
    </div>
  );
}

export default Statistics;
