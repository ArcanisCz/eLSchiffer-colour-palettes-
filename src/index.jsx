import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import Palette from '../Components/Palette';


const getColours = (item) => {
  return (item.colors)
};
const colours = palettes.map(getColours);

console.log(colours)

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((paletteData) => {
          return (
            <Palette key={paletteData.name} paletteData={paletteData} />
          )
        })}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
