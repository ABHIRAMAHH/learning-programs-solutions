import React, { useState } from 'react';

// --- Data Definitions ---
// Data for Book Details
const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

// Data for Blog Details
const blog = {
  title: 'React Learning',
  author: 'Stephen Biz',
  content: 'Welcome to learning React!',
  installation: 'Installation',
  installContent: 'You can install React from npm.',
  installAuthor: 'Schewzdenier'
};

// Data for Course Details
const courses = [
  { id: 201, name: 'Angular', date: '4/5/2021' },
  { id: 202, name: 'React', date: '6/3/2020' },
];

// --- Components ---

// Book Details Component
function BookDetails(props) {
  // Using map() to render a list of book details
  const bookList = props.books.map((book) => (
    <div key={book.id} className="mb-4 p-2 border-b border-gray-200 last:border-b-0">
      <h3 className="text-xl font-semibold text-gray-800">{book.bname}</h3>
      <h4 className="text-lg text-gray-600">Price: ${book.price}</h4>
    </div>
  ));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Details</h1>
      <ul>{bookList}</ul>
    </div>
  );
}

// Blog Details Component
function BlogDetails(props) {
  const { title, author, content, installation, installContent, installAuthor } = props.blog;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Details</h1>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">By {author}</p>
        <p className="mt-2 text-gray-700">{content}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{installation}</h3>
        <p className="text-gray-600 text-sm">By {installAuthor}</p>
        <p className="mt-2 text-gray-700">{installContent}</p>
      </div>
    </div>
  );
}

// Course Details Component
function CourseDetails(props) {
  // Using map() to render a list of course details
  const courseList = props.courses.map((course) => (
    <div key={course.id} className="mb-4 p-2 border-b border-gray-200 last:border-b-0">
      <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
      <p className="text-lg text-gray-600">Date: {course.date}</p>
    </div>
  ));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Details</h1>
      <ul>{courseList}</ul>
    </div>
  );
}

// Main App Component
function App() {
  // State to control visibility of components for conditional rendering examples
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Blogger App</h1>

        {/* Control buttons for conditional rendering */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setShowBooks(!showBooks)}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          >
            Toggle Books ({showBooks ? 'Hide' : 'Show'})
          </button>
          <button
            onClick={() => setShowBlogs(!showBlogs)}
            className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-200"
          >
            Toggle Blogs ({showBlogs ? 'Hide' : 'Show'})
          </button>
          <button
            onClick={() => setShowCourses(!showCourses)}
            className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition duration-200"
          >
            Toggle Courses ({showCourses ? 'Hide' : 'Show'})
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-start md:space-x-8">
          {/* Course Details - Conditional Rendering using Logical && Operator */}
          {showCourses && (
            <div className="flex-1 w-full md:w-1/3 mb-8 md:mb-0 bg-gray-50 rounded-lg shadow-md border-l-4 border-green-500">
              <CourseDetails courses={courses} />
            </div>
          )}

          {/* Vertical separator */}
          {showCourses && (showBooks || showBlogs) && (
            <div className="hidden md:block w-1 bg-green-500 h-auto self-stretch mx-4 rounded-full"></div>
          )}

          {/* Book Details - Conditional Rendering using Ternary Operator */}
          {showBooks ? (
            <div className="flex-1 w-full md:w-1/3 mb-8 md:mb-0 bg-gray-50 rounded-lg shadow-md border-l-4 border-green-500">
              <BookDetails books={books} />
            </div>
          ) : (
            <div className="flex-1 w-full md:w-1/3 mb-8 md:mb-0 text-center text-gray-500 p-4">
              Book Details are hidden.
            </div>
          )}

          {/* Vertical separator */}
          {(showBooks || showCourses) && showBlogs && (
            <div className="hidden md:block w-1 bg-green-500 h-auto self-stretch mx-4 rounded-full"></div>
          )}

          {/* Blog Details - Conditional Rendering using an if statement (simulated via state) */}
          {showBlogs && (
            <div className="flex-1 w-full md:w-1/3 bg-gray-50 rounded-lg shadow-md border-l-4 border-green-500">
              <BlogDetails blog={blog} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;