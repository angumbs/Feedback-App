import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    return (

        <>
            <FeedbackProvider>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Nav />
            </div>
            </FeedbackProvider>
        </>
    )
}

export default App