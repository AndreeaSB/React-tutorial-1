//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  const [alertVisible,setAlertVisible] = useState(false);

  /*const items = [
    "New York",
    "San Francisco",
    "Chicago",
    "Las Fierbinti",
    "Craiova",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }*/

  return (
    <div>
      {/*<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert>
        hello <span>lume</span>!
      </Alert> */}

      {alertVisible && <Alert onClose={ () => {setAlertVisible(false)}}>My alert</Alert>}

      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        Button
      </Button>

    </div>
  );
}

export default App;
