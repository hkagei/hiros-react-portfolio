import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import Card from './Components/card';
import Footer from './Components/footer';
import Header from './Components/header';
import Navigation from './Components/navigation';
import Project from './Components/project';
import ContactForm from './Components/contact';

function App() {
  return (
    <>
    <Header>
      <Navigation />
    </Header>
        <Card />
        <Project />
        <ContactForm />
      <Footer />
    </>
  );
}

export default App;
