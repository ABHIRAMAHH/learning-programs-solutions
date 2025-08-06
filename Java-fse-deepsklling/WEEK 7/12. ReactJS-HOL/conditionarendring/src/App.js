import React, { useState } from 'react';

// Component for the Guest user display
function GuestPage() {
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Please sign up.</h2>
      <p className="text-lg text-gray-600">Browse flight details (Guest View)</p>
    </div>
  );
}

// Component for the Logged-in user display
function UserPage() {
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome back!</h2>
      <p className="text-lg text-gray-600">You can now book tickets (User View)</p>
    </div>
  );
}

// Login Button component
function LoginButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Login
    </button>
  );
}

// Logout Button component
function LogoutButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    >
      Logout
    </button>
  );
}

// Greeting component that conditionally renders GuestPage or UserPage
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserPage />;
  }
  return <GuestPage />;
}

// Main App component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  // Event handler for login
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  // Event handler for logout
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      {/* Conditionally render the Greeting component */}
      <Greeting isLoggedIn={isLoggedIn} />

      {/* Conditionally render Login or Logout button */}
      <div className="mt-8">
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogoutClick} />
        ) : (
          <LoginButton onClick={handleLoginClick} />
        )}
      </div>
    </div>
  );
}

export default App;
