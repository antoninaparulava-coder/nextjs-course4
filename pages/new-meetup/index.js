import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMettupPage(){
    function addMeetUpHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetupForm