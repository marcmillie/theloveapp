import React, { useState, useEffect } from "react";
import "../styles/Matchmaker.css";

// Dummy user data (will be replaced with actual API or database later)
const dummyUsers = [
  { id: 1, name: "Taylor", gender: "Female", age: 26 },
  { id: 2, name: "Jordan", gender: "Male", age: 29 },
  { id: 3, name: "Alex", gender: "Non-Binary", age: 24 },
];

function Matchmaker() {
  const [currentUser, setCurrentUser] = useState(null); // Holds the user currently matched
  const [timer, setTimer] = useState(60); // Countdown timer (60s)
  const [isMatched, setIsMatched] = useState(false); // Whether a match has occurred
  const [isSearching, setIsSearching] = useState(false); // True when loading next match

  // Save liked user to local storage
  const saveLikedUser = (user) => {
    const stored = JSON.parse(localStorage.getItem("likedUsers")) || [];

    // Prevent saving duplicates
    const alreadyLiked = stored.some((u) => u.id === user.id);
    if (!alreadyLiked) {
      stored.push(user);
      localStorage.setItem("likedUsers", JSON.stringify(stored));
    }
  };
  
  // Load a new random match
  const startNewMatch = () => {
    const randomIndex = Math.floor(Math.random() * dummyUsers.length);
    setCurrentUser(dummyUsers[randomIndex]);
    setTimer(60); // Reset timer
    setIsMatched(false); // Reset match status
  };

  // Timer countdown effect
  useEffect(() => {
    if (!currentUser) {
      startNewMatch(); // Auto-start on initial render
      return;
    }

    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, currentUser]);

  const handleLike = () => {
    setIsMatched(true);              // Trigger match confirmation message
    saveLikedUser(currentUser);     // Save current match to localStorage
  };

  // Handle "Skip" button press
  const handleSkip = () => {
    setIsSearching(true);       // Show searching message
    setCurrentUser(null);       // Temporarily clear user
    setTimer(0);                // Clear timer bar

    // Wait 2 seconds before loading new match
    setTimeout(() => {
      setIsSearching(false);
      startNewMatch();
    }, 2000);
  };

  // While searching, show this loading screen
  if (isSearching) {
    return (
      <div className="matchmaker">
        <div className="searching-message">
          🔍 Searching for your next match...
        </div>
      </div>
    );
  }

  return (
    <div className="matchmaker">
      {currentUser && (
        <>
          <div className="match-card">
            <h2>{currentUser.name}</h2>
            <p>Gender: {currentUser.gender}</p>
            <p>Age: {currentUser.age}</p>
          </div>

          {/* Timer Bar UI */}
          <div className="timer-bar-container">
            <div
              className="timer-bar"
              style={{ width: `${(timer / 60) * 100}%` }}
            ></div>
            <div className="timer-text">Time left: {timer}s</div>
          </div>

          {/* Show Like/Skip Buttons Only After Timer Ends */}
          {timer === 0 && !isMatched && (
            <div className="decision-buttons">
              <button className="like-btn" onClick={handleLike}>👍 Like</button>
              <button className="skip-btn" onClick={handleSkip}>👎 Skip</button>
            </div>
          )}

          {/* Show "You Matched!" Message if User Liked */}
          {isMatched && (
            <div className="matched-message">
              ❤️ You both liked each other! Stay connected.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Matchmaker;