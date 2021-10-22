import Home from './pages/Home';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center">
      
      <div className={
        "w-full h-full max-w-768 min-h-720 max-h-screen flex flex-col items-center " + 
        "bg-gradient-to-b from-primary_blue to-black font-sans"
        }
      >
        <Home/>
      </div>
      
    </div>
  );
}

export default App;
