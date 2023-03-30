import { useEffect } from "react";

const Channels = ({ setChannel }) => {
  const changeChannel = (channel) => {
    setChannel(channel);
    console.log(channel);
  };

  return (
    <aside className="channel">
      <h1>TV GUIDE</h1>
      <div className="station" id="0" onClick={() => changeChannel(0)}>
        <h4>Channel 1</h4>
        <p>
          A stock portfolio web app that lets users track stock holdings over
          time and read news with AI stock predictions and login/logout.
        </p>
      </div>
      <div className="station" id="1" onClick={() => changeChannel(1)}>
        <h4>Channel 2</h4>
        <p>
          A news website similar to reddit with topics, articles, comments and
          persistent upvote/downvote. Can add, delete and update.{" "}
        </p>
      </div>
    </aside>
  );
};

export default Channels;
