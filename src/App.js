import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog';
import Header from './components/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Filters from './components/Filters';
import './App.scss';
import Paginations from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Filters/>
      <Blog/>
      <Paginations/>
      <Footer/>
    </div>
  );
}

export default App;
