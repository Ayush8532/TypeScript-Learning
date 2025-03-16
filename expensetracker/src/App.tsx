import { useState } from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <ExpenseTracker />
      </div>
    </div>
  );
}

export default App;