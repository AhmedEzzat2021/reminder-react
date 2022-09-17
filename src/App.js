import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { DateCount } from "./Components/DateCount";
import { DatesAction } from "./Components/DatesAction";
import { ListReminder } from "./Components/ListReminder";
import myData from "./Data";

function App() {
  const [data, setData] = useState(myData);
  const delData = () => {
    setData([]);
  };

  const viewData = () => {
    setData(myData);
  };

  useEffect(() => {
    setData([]);
  }, []);

  return (
    <div className="App">
      <Container>
        <DateCount myData={data} />
        <ListReminder myData={data} />
        <DatesAction deleteData={delData} viewData={viewData} />
      </Container>
    </div>
  );
}

export default App;
