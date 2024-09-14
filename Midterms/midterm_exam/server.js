const express = require('express');
const app = express();
const port = 3000;


const dishes = [
  { type: 'Sisig', province: 'Pampanga', price: 220 },
  { type: 'Salpicao', province: 'Quezon', price: 180 },
  { type: 'Bagnet', province: 'Ilocos', price: 370 }
];


app.get('/dishes', (req, res) => {
  res.json(dishes);
});


app.get('/dishes/:type', (req, res) => {
  const dishType = req.params.type.toLowerCase();
  const dish = dishes.find(d => d.type.toLowerCase() === dishType);

  if (dish) {
    res.json(dish);
  } else {
    res.status(404).json({ message: 'Record not found' });
  }
});


app.use((req, res) => {
  res.status(404).json({ message: 'Record not found' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});