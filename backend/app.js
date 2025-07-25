const express = require('express');
const app = express();
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurantRoutes');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use('/api/restaurants', restaurantRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Restaurant Cache API');
});


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
