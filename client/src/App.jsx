import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./components/EditForm";
function App() {
  return (
    <>
      <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/create" element={<ContactForm />} />
              <Route path="/edit/:id" element={<EditForm/> } />
      </Routes>
    </>
  )
}

export default App;
