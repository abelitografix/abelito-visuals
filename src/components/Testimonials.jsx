
import { useState } from "react";

const fieldStyle = {
  width: "100%",
  boxSizing: "border-box",
  background: "#101010",
  color: "#F7F4ED",
  border: "1px solid #444",
  borderRadius: 9,
  padding: "12px 14px",
  font: "inherit",
  marginBottom: 14,
};

export default function Testimonials() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitFeedback = (e) => {
    e.preventDefault();

    const email = "abelianabelito.com";
    const subject = encodeURIComponent("Portfolio Client Feedback");
    const body = encodeURIComponent(
      `Name: ${name}\nRating: ${rating}/5\n\nFeedback:\n${comment}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="testimonials"
      style={{
        background: "#101010",
        color: "#F7F4ED",
        padding: "45px 6%",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <p style={{
          color: "#D7FF3F",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: 2,
        }}>
          THE LOVE IS REAL / 001
        </p>

        <h2 style={{
          fontSize: "clamp(24px, 3vw, 32px)",
          margin: "10px 0",
        }}>
          GOOD WORK. REAL REACTIONS.
        </h2>

        <p style={{
          color: "#AAAAAA",
          marginBottom: 25,
        }}>
          A little love from the people I've created with.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: 20,
          alignItems: "start",
        }}>



          {/* CLIENT FEEDBACK FORM */}
          <form
            onSubmit={submitFeedback}
            style={{
              background: "#1B1B1B",
              border: "1px solid #333",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{
              fontSize: 21,
              margin: "0 0 8px",
            }}>
              LEAVE YOUR FEEDBACK.
            </h3>

            <p style={{
              color: "#AAA",
              fontSize: 14,
              marginBottom: 20,
            }}>
              Worked with me? Share your experience.
            </p>

            <input
              type="text"
              placeholder="Your name"
              aria-label="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={80}
              style={fieldStyle}
            />

            <div style={{
              display: "flex",
              gap: 6,
              marginBottom: 15,
            }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  aria-label={`Rate ${star} stars`}
                  aria-pressed={rating === star}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 2,
                    color: star <= rating ? "#D7FF3F" : "#666",
                    fontSize: 27,
                    cursor: "pointer",
                  }}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              placeholder="Write your feedback here..."
              aria-label="Your feedback"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              maxLength={1000}
              rows={3}
              style={{
                ...fieldStyle,
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#D7FF3F",
                color: "#171717",
                border: "none",
                borderRadius: 9,
                padding: "13px 22px",
                fontWeight: 800,
                fontSize: 13,
                cursor: "pointer",
                width: "100%",
              }}
            >
              SEND FEEDBACK ↗
            </button>

            <p style={{
              color: "#888",
              fontSize: 11,
              margin: "12px 0 0",
            }}>
              Opens your email app to send the review.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
