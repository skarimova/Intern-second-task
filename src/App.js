import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import Header from './components/Header';
import Filters from './components/Filters';
import Blog from './components/Blog';
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
