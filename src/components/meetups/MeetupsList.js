import MeetupsItem from "./MeetupsItem"

import  './MeetupsList.css';

const MeetupsList = (props) => {
    return(
        <ul className="list">
            {props.meetups.map((meetup) => (
                <MeetupsItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description} 
                />
            ))}
        </ul>
    );
};

export default MeetupsList;