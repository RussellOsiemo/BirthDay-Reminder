// import logo from './logo.svg';
// import './App.css';
 import './index.css';
 import "bootstrap/dist/css/bootstrap.min.css";
  var today = new Date();
  //date im counting down to
 var bDay = new Date("Dec 27, 2021 00.00.00").getTime(); 
//update the count down every one second
var x = setInterval(() => {
  //get todays time and date
  var now = new Date().getTime();
  //find the time from now to the Birthday
  var interval = endDate - now;
  //time calculation for days hour minutes and seconds
  var days = Math.floor(interval/ (1000 *60*60*24));
  var hours = Math.floor(interval % (1000*60*60*24))
}, interval);
function App() {
  return (
  
       <div className="App">
      <header className="App-header">
       <h1>My Friends Birthday reminder</h1>
      </header>
       <section className="row">
    
     
      <div className="col-md-9 d-flex justify-content-center">
       <div className="card"><h2 className="name">
           Gayla Fahnkerry
         </h2>
          <h4 className="work"> Teacher</h4>
           <img src={"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"} className="dp" alt="profile"/>
         <h6>27 October 2002</h6>
         <h6 className='justify-content-right'>one month</h6>
         <br />
        
         
         
         <p className="mx-auto">"I wish to Have more friends this year AND OF COURSE THE MONEY!!!"</p> 
         <button type='button' className="btn btn-outline-warning">Remove</button>
       </div>
      </div>
    
     </section>
     </div>
  );
}

export default App;
