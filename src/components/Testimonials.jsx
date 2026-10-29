
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "#101010",
        color: "#F7F4ED",
        padding: "90px 6%",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <p style={{ color: "#D7FF3F", fontWeight: 700 }}>
          THE LOVE IS REAL / 001
        </p>

        <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
          GOOD WORK. REAL REACTIONS.
        </h2>

        <p style={{ color: "#AAAAAA", marginBottom: 35 }}>
          A little love from the people I've created with.
        </p>

        <div
          style={{
            background: "#1B1B1B",
            border: "1px solid #333",
            borderRadius: 18,
            padding: "32px",
            maxWidth: 650,
          }}
        >
          <span style={{ color: "#D7FF3F", fontSize: 52 }}>
            “
          </span>

          <blockquote
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              lineHeight: 1.5,
              margin: "10px 0 28px",
            }}
          >
            Daaamn 🤗🔥 Lemme share with the client ASAP!
          </blockquote>

          <div style={{ borderTop: "1px solid #444", paddingTop: 20 }}>
            <strong style={{ color: "#D7FF3F" }}>
              Sirnewson
            </strong>
            <p style={{ color: "#999", marginTop: 5 }}>
              Creative collaborator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
