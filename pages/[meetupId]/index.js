import MeetupDetail from "@/components/meetups/MeetupDetail"
import { Fragment } from "react"

function MeetupDetails(){
    return(
        <MeetupDetail 
        image='https://www.jasminealley.com/wp-content/uploads/2024/08/crown-anchor-london.jpg' 
        title='First Meetup' 
        address='Some Street 5, Some City' 
        description='This is a first meetup' 
        />
    )
}

export default MeetupDetails