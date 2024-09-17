/**
 * Initialize Express application server
 */
import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Middleware for route handling
app.use('/', router);

// Server listens on specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the app for further use
export default app;
