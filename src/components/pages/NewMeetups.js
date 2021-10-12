import { useHistory } from "react-router-dom";

import NewMeetupForm from "../meetups/NewMeetupForm";

const NewMeetups = () => {
    const history = useHistory();

  const addMeetupHandler = (meetupdata) => {
    
    fetch("https://meetups-6a62c-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupdata),
      headers: {
        "Content-Type" : "application/json",
      }
    }).then(() => {
        history.replace("/");
    })
  };
  return (
    <div>
      <h1>Add Newmeet</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetups;
