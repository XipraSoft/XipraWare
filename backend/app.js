const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models'); 
// Import Sequelize instance

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/protected', require('./routes/protected'));
app.use('/api/stripe', require('./routes/stripe'));



sequelize.authenticate()
  .then(() => console.log('MySQL Connected'))
  .catch(err => console.error('Error connecting to MySQL:', err));

sequelize.sync();  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
