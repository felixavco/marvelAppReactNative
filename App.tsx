import React from 'react';
import { CharactersProvider } from './components/CharactersContext';
import Home from './screens/Home';

export default function App() {
  return (
    <CharactersProvider>
      <Home />
    </CharactersProvider>
  );
}
