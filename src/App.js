// import logo from './logo.svg';
// import './App.css';
 import './index.css';
 import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
  
       <div className="App">
      <header className="App-header">
       <h1>My Friends Birthday reminder</h1>
      </header>
       <section className="row">
    
     
      <div className="col-md-6">
       <div className="item">
          <h4 className="work"> Teacher</h4>
         <h6>27 October 2002</h6>
         <span>In Three Days</span>
         <br />
         <span className="name">
           Gayla Fahnkerry
         </span>
         <p className="wish">"I wish to Have more friends this year AND OF COURSE THE MONEY!!!"</p> 
         <button className="btn-info">Remove</button>
       </div>
      </div>
    
     </section>
     </div>
  );
}

export default App;
