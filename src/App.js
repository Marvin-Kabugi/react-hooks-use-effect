import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
    console.log("after")
  }, [])

  
  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count => count+1)}>Click Me {count}</button>
      <input type="text" value={text} placeholder="Type away ..." onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default App;
