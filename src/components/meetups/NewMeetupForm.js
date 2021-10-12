import { useRef } from "react";
import Card from "../UI/Card"

import "./NewMeetupForm.css";

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription =  descriptionInputRef.current.value;

        const meetData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }
        props.addMeetup(meetData);
    };

    return <Card>
        <form className="form" onSubmit={submitHandler}>
            <div className="control">
                <label htmlFor="title">Add Title</label>
                <input type="text" id="title" ref={titleInputRef} />
            </div>
            <div className="control">
                <label htmlFor="image">Image</label>
                <input type="url" id="image" ref={imageInputRef}/>
            </div>
            <div className="control">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef}/>
            </div>
            <div className="control">
                <label htmlFor="description">Description</label>
                <textarea id="description" ref={descriptionInputRef}></textarea>
            </div>
            <div className="actions">
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
};

export default NewMeetupForm;