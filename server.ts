import app from './app';
import port from './config';

const PORT = port.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
