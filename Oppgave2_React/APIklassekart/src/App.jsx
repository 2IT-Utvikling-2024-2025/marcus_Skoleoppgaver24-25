import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ClassInfo from './StudentProfile'
import Layout from './Layout'
import StudentCreate from './StudentCreate'
import StudentList from './StudentsList'
import Home from './Home'
import StudentInfo from './StudentInfo'
import ClassList from './ClassList.jsx'
import ClassListCreate from './ClassListCreate'


function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentInfo />} />
          <Route path="/students/create" element={<StudentCreate />} />
          <Route path="/klasser" element={<ClassList />} />
          <Route path="/klasser/:id" element={<ClassInfo />} />
          <Route path="/klasser/create" element={<ClassListCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App