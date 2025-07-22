import { useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => setClicks(clicks + 1);

  const [isTextVisible, setIsTextVisible] = useState(false);
  const toggleTextVisibility = () => setIsTextVisible(!isTextVisible);

  const [tags, setTags] = useState({
    html: 0,
    css: 0,
    js: 0,
  });

  const handleUpdateTags = tagName => {
    setTags({
      ...tags,
      [tagName]: tags[tagName] + 1,
    });
  };

  const [dates, setDates] = useState([]);

  const addDate = () => {
    setDates(prevDates => [...prevDates, Date.now()]);
  };

  const deleteDate = date => {
    setDates(prevDates => prevDates.filter(prevDate => prevDate !== date));
  };

  return (
    <>
      <button onClick={addDate}>Add date</button>
      {dates.length > 0 && (
        <ul>
          {dates.map(date => (
            <li key={date}>
              {date}
              <button onClick={() => deleteDate(date)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <button onClick={() => handleUpdateTags("html")}>html {tags.html}</button>
      <button onClick={() => handleUpdateTags("css")}>css {tags.css}</button>
      <button onClick={() => handleUpdateTags("js")}>js {tags.js}</button>
      <hr />
      <CountDisplay count={clicks} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <hr />
      <button onClick={toggleTextVisibility}>
        {isTextVisible ? "Hide" : "Show"}
      </button>
      {isTextVisible && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          earum debitis laboriosam fuga nemo. Architecto aperiam fuga
          perspiciatis consectetur sequi doloremque adipisci natus! Error hic,
          dolore accusamus odio laudantium consectetur.
        </p>
      )}
    </>
  );
}
