import React, { useState } from 'react';

// Main App component
function App() {
  // State for the counter example
  const [counter, setCounter] = useState(0);
  // State for the synthetic event message
  const [syntheticEventMessage, setSyntheticEventMessage] = useState('');
  // State for currency converter inputs and output
  const [indianRupees, setIndianRupees] = useState('');
  const [euro, setEuro] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  // Function to say hello
  const sayHello = () => {
    console.log("Hello!");
    alert("Hello!"); // Using alert for demonstration as per original document's implied output
  };

  // Function to display a static message
  const displayStaticMessage = () => {
    console.log("This is a static message.");
    alert("This is a static message."); // Using alert for demonstration
  };

  // Function to handle multiple methods on increment button click
  const handleMultipleIncrements = () => {
    incrementCounter();
    sayHello();
    displayStaticMessage();
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  // Function that takes an argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event handler
  const handleSyntheticEvent = () => {
    setSyntheticEventMessage("I was clicked (Synthetic Event)");
    alert("I was clicked (Synthetic Event)");
  };

  // Handles Indian Rupees input change
  const handleIndianRupeesChange = (e) => {
    setIndianRupees(e.target.value);
  };

  // Handles Euro input change
  const handleEuroChange = (e) => {
    setEuro(e.target.value);
  };

  // Handles currency conversion from INR to Euro
  const convertRupeesToEuro = (e) => {
    e.preventDefault(); // Prevent default form submission
    const inrValue = parseFloat(indianRupees);
    if (!isNaN(inrValue)) {
      const euroValue = inrValue * 0.011; // Approximate conversion rate (1 INR = 0.011 Euro)
      setConversionResult(`${inrValue} INR is approximately ${euroValue.toFixed(2)} Euro`);
    } else {
      setConversionResult("Please enter a valid number for Indian Rupees.");
    }
  };

  // Handles currency conversion from Euro to INR
  const convertEuroToRupees = (e) => {
    e.preventDefault(); // Prevent default form submission
    const euroValue = parseFloat(euro);
    if (!isNaN(euroValue)) {
      const inrValue = euroValue / 0.011; // Approximate conversion rate
      setConversionResult(`${euroValue} Euro is approximately ${inrValue.toFixed(2)} INR`);
    } else {
      setConversionResult("Please enter a valid number for Euro.");
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">React Event Handling Examples</h1>

        {/* Counter Section */}
        <section className="mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Counter Example</h2>
          <p className="text-center text-4xl font-extrabold text-blue-600 mb-6">{counter}</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleMultipleIncrements}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Increment (Multiple Methods)
            </button>
            <button
              onClick={decrementCounter}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Decrement
            </button>
          </div>
        </section>

        {/* Argument Passing Section */}
        <section className="mb-8 p-6 bg-purple-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Argument Passing Example</h2>
          <div className="flex justify-center">
            <button
              onClick={() => sayWelcome("Welcome to the React Event App!")}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Say Welcome
            </button>
          </div>
        </section>

        {/* Synthetic Event Section */}
        <section className="mb-8 p-6 bg-yellow-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Synthetic Event Example</h2>
          <div className="flex flex-col items-center">
            <button
              onClick={handleSyntheticEvent}
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
            >
              OnPress (Synthetic Event)
            </button>
            {syntheticEventMessage && (
              <p className="text-yellow-700 text-lg font-medium">{syntheticEventMessage}</p>
            )}
          </div>
        </section>

        {/* Currency Converter Section */}
        <section className="p-6 bg-teal-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Currency Converter</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="indianRupees" className="block text-gray-700 text-sm font-bold mb-2">
                Indian Rupees (INR)
              </label>
              <input
                type="number"
                id="indianRupees"
                value={indianRupees}
                onChange={handleIndianRupeesChange}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500"
                placeholder="Enter amount in INR"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={convertRupeesToEuro}
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Convert INR to Euro
              </button>
            </div>
          </form>

          <form className="space-y-4 mt-6">
            <div>
              <label htmlFor="euro" className="block text-gray-700 text-sm font-bold mb-2">
                Euro (€)
              </label>
              <input
                type="number"
                id="euro"
                value={euro}
                onChange={handleEuroChange}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500"
                placeholder="Enter amount in Euro"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={convertEuroToRupees}
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Convert Euro to INR
              </button>
            </div>
          </form>

          {conversionResult && (
            <p className="mt-6 text-center text-lg font-medium text-teal-700 bg-teal-100 p-3 rounded-lg">
              {conversionResult}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
