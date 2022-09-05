import "../src/style.css";
import { IdCard } from "./components/IdCard";
import { Greetings } from "./components/Greetings";
import { Random } from "./components/Random";
import { BoxColor } from "./components/BoxColor";
import { CreditCard } from "./components/CreditCard";
import { Rating } from "./components/Rating";
import { DriverCard } from "./components/DriverCard";

function App() {
  return (
    <div className="App">

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>   
    </div>
  );
}

export default App;
