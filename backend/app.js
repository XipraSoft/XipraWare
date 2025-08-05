const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models'); // ✅ Correct way to import the sequelize instance

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (we will add later)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/protected', require('./routes/protected'));


// Test DB connection & sync models
sequelize.authenticate()
  .then(() => console.log('MySQL Connected'))
  .catch(err => console.error('Error connecting to MySQL:', err));

sequelize.sync();  // auto creates tables if not exist

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
