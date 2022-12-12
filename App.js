
import './App.css';

let curDate = new Date(2022,12,12,23);
curDate = curDate.getHours();

let todaysDate = new Date().toLocaleDateString();
let todaysTime = new Date().toLocaleTimeString();

let greeting = "";
const cssStyle = {};

 if (curDate >= 1 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
 }else if(curDate >= 12 && curDate <19 ){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
 }else{
  greeting = 'Good Night';
  cssStyle.color = 'black';
 }

 

function App() {
  return (
    <>
     <div className="App">
      <h1>Hi Suraj, <br/><span style={cssStyle}>{greeting}</span>
       <br/>{todaysDate}<br/>{todaysTime}
        </h1>
     </div>
    </>
  );
}

export default App;
