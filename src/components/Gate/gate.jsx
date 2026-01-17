import React, { useState } from "react";
import "../../vars.css";

const Gate = ({ children, password }) => {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === password) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) return children;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "white",
        padding: "32px",
      }}
      >


      

        <form
        onSubmit={handleSubmit}
        style={{
            width: "100%",
            maxWidth: "420px",
            padding: "40px",
            borderRadius: "12px",
            background: "white",
            border: "1px solid #E6E6E6",
            textAlign: "left",
        }}
        >

        <label
          style={{
            fontSize: "16px",
            opacity: 0.6,
            display: "block",
            marginBottom: "8px",
          }}
        >
          Password
        </label>

        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 14px",
            fontSize: "16px",
            borderRadius: "8px",
            border: error ? "1px solid #E57373" : "1px solid #E0E0E0",
            outline: "none",
          }}
        />

        {error && (
          <p style={{ fontSize: "13px", color: "#E57373", marginTop: "8px" }}>
            Incorrect password
          </p>
        )}

        <button
          type="submit"
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            background: "var(--color-accent)",
            color: "white",
          }}
        >
          Enter
        </button>

        <p
          style={{
            fontSize: "13px",
            opacity: 0.6,
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          Password available upon request 
        </p>

        <p
          style={{

            fontSize: "13px",
            marginTop: "4px",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          li.ol@northeastern.edu
        </p>

      </form>
    </div>
  );
};

export default Gate;