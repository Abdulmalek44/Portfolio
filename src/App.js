import { Hero, About, Skills, Work, Contact } from './Sections';
import { Footer, Navbare } from './Components';
import CopyButton from './Components/CopyButton';
function App() {
  return (
    <>
      <Navbare />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <CopyButton />
      <Footer />
    </>
  );
}

export default App;

