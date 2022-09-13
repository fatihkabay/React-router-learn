import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Europa" element={<Europa />}></Route>
        <Route path="/Africa" element={<Africa />}></Route>
        <Route path="/Antarctica" element={<Antarctica />}></Route>
        <Route path="/Asia" element={<Asia />}></Route>
        <Route path="/NorthAmerica" element={<NorthAmerica />}></Route>
        <Route path="/SouthAmerica" element={<SouthAmerica />}></Route>
        <Route path="/Australia" element={<Australia />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="page">
      <h1>Welcome Home Page</h1>
      <Link className="link" to="/Europa">
        Europa
      </Link>
      <Link className="link" to="/Africa">
        Africa
      </Link>
      <Link className="link" to="/Antarctica">
        Antarctica
      </Link>
      <Link className="link" to="/Asia">
        Asia
      </Link>
      <Link className="link" to="/NorthAmerica">
        NorthAmerica
      </Link>
      <Link className="link" to="/SouthAmerica">
        SouthAmerica
      </Link>
      <Link className="link" to="/Australia">
        Australia
      </Link>
    </div>
  );
}

function Europa() {
  return (
    <div className="page">
      <h1>Welcome Europa Page</h1>
      <p>
        The area of Europa is approximately 10.18 million square kilometers,
        making it the smallest makes the second continent. Geographically, it
        accounts for 39% of the continent's population.
        <a target="blank" href="https://tr.wikipedia.org/wiki/Rusya">
          Russia
        </a>
        is Europe's largest and most populous country, accounting for 15%. is
        his country. As of 2021, the total population of Europe is approximately
        745 is million.The currency of most European Union countries is the
        <a target="blank" href="https://tr.wikipedia.org/wiki/Euro">
          Euro
        </a>
        .
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

function Africa() {
  return (
    <div className="page">
      <h1>Welcome Africa Page</h1>
      <p>
        Africa is the world's second largest continent in terms of area and
        population density. It covers 6% of the world's surface area and 24.4%
        of the world's land area, with an area of 30.8 million square
        kilometers, together with the islands considered adjacent to it.
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

function Antarctica() {
  return (
    <div className="page">
      <h1>Welcome Antarctica Page</h1>
      <p>
        Antarctica is the southernmost continent of the
        <a
          target="blank"
          href="https://tr.wikipedia.org/wiki/G%C3%BCney_yar%C4%B1mk%C3%BCre"
        >
          Southern Hemisphere
        </a>
        and includes the South Pole. It is the only continent south of Africa
        and Oceania that does not contain a country. It is the driest place in
        the world, some parts of the continent have not rained for 2 million
        years.
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

function Asia() {
  return (
    <div className="page">
      <h1>Welcome Asia Page</h1>
      <p>
        Asia or the Continent of Asia, the continent located to the east of
        Europe, to the west of the
        <a href="https://tr.wikipedia.org/wiki/B%C3%BCy%C3%BCk_Okyanus">
          Pacific Ocean
        </a>
        , to the north of
        <a href="https://tr.wikipedia.org/wiki/Okyanusya"> Oceania </a> and to
        the south of the Arctic Ocean, is the largest continent in the world in
        terms of surface area, but also the most populated continent in terms of
        population. Although its borders vary, it has land borders with the
        continents of Europe and Africa. Together with Europe, it forms Eurasia,
        and together with the continents of Europe and Africa, it forms the Old
        World. Asia, the first continent that humanity set foot after leaving
        Africa, is also the origin of many religions in the world. Hebrew
        religions such as Islam and Christianity originating from the Middle
        East and Dharmatic religions such as Buddhism and Hinduism originating
        from the Indian Subcontinent are examples of this. The Asian Continent,
        stretching from the Arctic Circle to the Equator, contains many
        different landforms such as the Dead Sea, the lowest point on the earth,
        and Everest, the highest point.
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

function NorthAmerica() {
  return (
    <div className="page">
      <h1>Welcome NorthAmerica Page</h1>
      <p>
        North America is a continent located in the northern hemisphere,
        surrounded by the{" "}
        <a href="https://tr.wikipedia.org/wiki/Arktik_Okyanusu">
          {" "}
          Arctic Ocean{" "}
        </a>{" "}
        to the north, the{" "}
        <a href="https://tr.wikipedia.org/wiki/Atlas_Okyanusu">
          {" "}
          Atlantic Ocean{" "}
        </a>{" "}
        to the east, the{" "}
        <a href="https://tr.wikipedia.org/wiki/Karayip_Denizi">
          {" "}
          Caribbean Sea{" "}
        </a>{" "}
        to the south, and the{" "}
        <a href="https://tr.wikipedia.org/wiki/B%C3%BCy%C3%BCk_Okyanus">
          {" "}
          Pacific Ocean{" "}
        </a>{" "}
        to the northwest.
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

function SouthAmerica() {
  return (
    <div className="page">
      <h1>Welcome SouthAmerica Page</h1>
      <p>
        South America is a continent located in the south of America. Although
        located in the Southern Hemisphere, a small part of its territory is
        located in the Northern Hemisphere.East of the Pacific Ocean, Atlas
        Ocean, south of North America and Antarctica is located in the north.
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

function Australia() {
  return (
    <div className="page">
      <h1>Welcome Australia Page</h1>
      <p>
        Australia, or officially the Commonwealth of Australia, is a continental
        country located in the Southern Hemisphere. It lies between the{" "}
        <a href="https://tr.wikipedia.org/wiki/Hint_Okyanusu"> Indian Ocean </a>{" "}
        and the Pacific Ocean. It is located in the continent of Oceania and
        occupies a very large part of the continent. Its neighbors are
        Indonesia, East Timor, Papua New Guinea, the Solomon Islands, Vanuatu,
        New Caledonia and New Zealand. Its capital is Canberra and its largest
        city is <a href="https://tr.wikipedia.org/wiki/Sidney"> Sydney </a>.
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

export default App;
