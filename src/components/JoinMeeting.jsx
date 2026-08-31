import { useState } from "react";
import { Keyboard } from "lucide-react";

function JoinMeeting() {
  const [meetingCode, setMeetingCode] = useState("");
  const [error, setError] = useState("");

  const handleJoin = () => {
    const code = meetingCode.trim();

    if (!code) {
      setError("Enter a meeting code or link");
      return;
    }

    setError("");

    console.log("Joining meeting:", code);

    // Later:
    // navigate(`/meeting/${code}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleJoin();
    }
  };

  return (
    <div className="join-wrapper">

      <div
        className={`join-box ${error ? "join-error" : ""}`}
      >

        <Keyboard
          size={20}
          className="join-keyboard-icon"
        />

        <input
          type="text"
          value={meetingCode}
          onChange={(event) => {
            setMeetingCode(event.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          placeholder="Enter a code or link"
          aria-label="Enter a code or link"
        />

        <button
          type="button"
          className={`join-button ${
            meetingCode.trim()
              ? "join-active"
              : ""
          }`}
          disabled={!meetingCode.trim()}
          onClick={handleJoin}
        >
          Join
        </button>

      </div>

      {error && (
        <div className="join-error-message">
          {error}
        </div>
      )}

    </div>
  );
}

export default JoinMeeting;