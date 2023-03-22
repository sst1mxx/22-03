import { useState } from "react";
import './App.css';
import List from "./components/List/List";
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Input from "./components/Input/Input";

function App() {
    const arr = [
        {
            id: 1,
            task: 'coding'
        },
        {
            id: 2,
            task: 'eat'
        },
        {
            id: 3,
            task: 'sleep'
        }
    ]
    const [show, setShow] = useState(false)
    const [state, setState] = useState();
    const handleShow = () => setShow(!show)
    return (
        <div className="App">
            {show && <Modal
                handleShow={handleShow}/>}
            <Button handleClick={handleShow}>
                Открыть модалку
            </Button>
            <input name="search" placeholder="Поиск заметок" onChange={(event) => {
                setState(event.target.value)
                Input(state)
            }}/>
            <List arr={arr}/>
        </div>
    );
}

export default App;
