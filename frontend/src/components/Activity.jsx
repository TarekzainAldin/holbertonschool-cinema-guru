import React from 'react';
import './components.css';

export default function Activity({ activity }) {
  const formatActivity = (act) => {
    if (!act) return "";
    if (act.action && act.title) {
      // Format: Capitalize action + title, e.g. "Liked 'Video 1' recently."
      return `${act.action.charAt(0).toUpperCase() + act.action.slice(1)} "${act.title}" recently.`;
    }
    return "Recent activity.";
  };

  return (
    <li className="activity-item">
      <p>{formatActivity(activity)}</p>
    </li>
  );
}
