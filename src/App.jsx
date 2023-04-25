import apiUrl from '../api'
import Footer from './components/footer';
import Navbar from './components/navbar';
import Index from './pages/Index';
function App() {



  return (
    <>
        <Navbar />
        
        <div className="md:h-[50%] md:w-[50%] md:rounded-full md:bg-gradient-to-r from-[#121226] to-[#0b094a] blur-[115px] absolute right-0 z-0"></div>
        
        <Index />
        
        <Footer />
      
    </>
  );
}

export default App;
