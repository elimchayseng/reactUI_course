// APP  1 


import "./App.css";
import restaurant from "./restaurant.jpeg";

function Header(props) {
  return (
    <header>
      <h1> {props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p> We serve {props.adj} food</p>
      <img src={restaurant} height={200} alt="restaurant interior" />
      <img
        src="https://github.com/elimchayseng.png"
        height={200}
        alt="github pic"
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <section>
      <p> Oh yea, its {props.year}! </p>
    </section>
  );
}

const dishes = ["Avo Toast", "Coffee", "Banana Bread", "Muffins"];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <>
      className="App">
      <Header name="Louie" />
      <Main adj="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;


/// APP 2

import "./App.css";
import restaurant from "./restaurant.jpeg";

function SecretComponent() {
  return <h1>Secret information for authorized users only </h1>;
}

function RegularComponent() {
  return <h1>Regular information for anyone </h1>;
}

function App({authorized}) {
  return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
}

export default App;


// APP 3 
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState();
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`its ${emotion} in here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`its ${secondary} in here`);
  }, [secondary]);

  return (
    <>
      <h1>
        {" "}
        Current Emotion is {emotion} and {secondary}
      </h1>
      <button onClick={() => setEmotion("happy")}>Delight</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setSecondary("crabby")}>CRAB PEOPLE</button>

      <button onClick={() => setEmotion("jealous")}>Envy</button>
    </>
  );
}

export default App;


//APP 4 

import "./App.css";
import React, { useReducer } from "react";

function App() {
  const [checked, toggle] = useReducer(
    setChecked((checked) => !checked),
    false
  );

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p> {checked ? "checked" : "not checked"} </p>
    </>
  );
}

// APP 5 

import "./App.css";
import React, { useState, useEffect } from "react";

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // grab data
  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  //state handling

  if (loading) return <h1>LOADING YO</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!data) return null;

  if (data) {
    console.log(data);

    // render data
    return (
      <div>
        <h1>{data.login}</h1>
        <p> {data.type}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>NO DATA BRO</div>;
}

export default App;

//https://api.github.com/users/elimchayseng


