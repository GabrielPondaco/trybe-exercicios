import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Brush teeth', 'Make breakfast', 'Study react', 'a lil bit more of react', 'sleep'];

function App() {
  
  return (
    <div className='App'>
      <Header />
      <ol className='list'>{tasks.map((task) => Task(task))}</ol>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
