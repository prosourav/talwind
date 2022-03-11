import './App.css';
import image from './38.jpg';
function App() {
  return (
    <div className="App">
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>

  <div className="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 flex-col">
  <div className="shrink-0  ">
    <img className="h-16 w-46 " src={image} alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div>
  
    </div>
  );
}

export default App;
