import logo from './logo.svg';
import './App.css';
import Card from './Components/card';
import Footer from './Components/footer';
import Header from './Components/header';
 import Navigation from './Components/navigation';
// import Project from './Components/project';
import ContactForm from './Components/contact';

function App() {
  return (
    <>
    <Header>
      <Navigation>
      </Navigation>
      </Header>
      <main>
        {/* {
         
            <Gallery currentCategory={currentCategory}></Gallery> */}
            <Card></Card>
        {/* }{""} */}
        <ContactForm></ContactForm>
  
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
