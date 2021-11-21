import "./App.css";
import { YoutubeData } from "./YoutubeData";
function App() {
  return (
    <div>
      <div className="youtube-list">
        {YoutubeData.map((item, index) => {
          let newClass = "";
          if (index === 1) newClass = "abc";
          return (
            <YoutubeItem
              key={item.id}
              image={item.image}
              avatar={item.avatar || item.image}
              title={item.title}
              author={item.author}
              className={newClass}
            ></YoutubeItem>
          );
        })}
      </div>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "This is example of author name"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
