const path = require('path');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

app.get('/'), (req, res) => {
  res.send('Welcome to Node Chat App')
};

app.listen(3000);
