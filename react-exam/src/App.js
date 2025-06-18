import { useState } from "react";
import './App.css';
function App() {

  const [list, setList] = useState([])
  const [radio, setRadio] = useState()
  const [input, setInput] = useState(0)
  const [nextId, setNextId] = useState(1)

  function add() {
    setList([...list, { id: nextId, type: radio, content: input }])
    setInput(0)
    setNextId(nextId + 1)
  }
  function remove(item) {
    setList(list.filter(lists => lists.id !== item.id))
  }
  let price = 0;
  list.forEach((item) => {
    if (item.type === "수입") {
      price = price + Number(item.content)
    } else if (item.type === "지출") {
      price = price - Number(item.content)
    }
    return price;
  })
  const radioChange = (e) => {
    setRadio(e.target.value)
  }
  const money = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <h2>가계부</h2>

      <div>
        수입<input type="radio" value="수입" name="type" onChange={radioChange} />
        지출<input type="radio" value="지출" name="type" onChange={radioChange} />
      </div>
      <div>
        <span>금액</span><input type="text" value={input} onChange={money}></input>
        <button onClick={add}>등록</button>
      </div>

      <div>
        <h2>총금액: {price}</h2>
        <ul>
          {list.map((item => <li key={item.id}>({item.type}){item.content} <button onClick={() => { remove(item) }}>삭제</button></li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
