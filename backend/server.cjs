const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks'); 
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' })); 
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TaskApp', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});