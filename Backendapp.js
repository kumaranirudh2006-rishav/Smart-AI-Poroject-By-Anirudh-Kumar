// ===== server.js =====
const express = require("express");
const app = express();

app.use(express.json());

// Simple backend route
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  let reply;
  if (userMessage.toLowerCase() === "hello") {
    reply = "AI: Hi there! 👋 How are you?";
  } else if (userMessage.toLowerCase().includes("a=0") && userMessage.toLowerCase().includes("m=9") && userMessage.toLowerCase().includes("a+m")) {
    let a = 0, m = 9;
    reply = "AI: a + m = " + (a + m);
  } else {
    reply = "AI: You said → " + userMessage;
  }

  res.json({ reply });
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
