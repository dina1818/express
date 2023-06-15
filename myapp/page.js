const express = require('express');
const app = express();

app.use((req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();
  
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 12) {
    next();
  } else {
    res.send('Sorry, the website is only available during working hours (Monday to Friday, 9am to 5pm).');
  }
});

const navBar = `
  <nav>
    <a href="/">Home</a>
    <a href="/services">Our Services</a>
    <a href="/contact">Contact Us</a>
  </nav>
`;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        ${navBar}
        <h1>Welcome to the Home page!</h1>
      </body>
    </html>
  `);
});

app.get('/services', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Our Services</title>
      </head>
      <body>
        ${navBar}
        <h1>Our Services</h1>
        <p>Here are the services we offer.</p>
      </body>
    </html>
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Contact Us</title>
      </head>
      <body>
        ${navBar}
        <h1>Contact Us</h1>
        <p>Please contact us using the contact details provided on this page.</p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
