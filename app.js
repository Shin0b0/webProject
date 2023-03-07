const express = require("express");
const app = express();

// Import the route files
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");

// Use the route files in your app
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
