import { useState, useEffect } from "react";

const Clock= () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div>
      <h2>Current Time:</h2>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
