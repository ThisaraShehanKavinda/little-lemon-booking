import React from 'react';
import './App.css';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Lemon Restaurant Booking</h1>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
