import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Mettup',
        image: 'https://www.jasminealley.com/wp-content/uploads/2024/08/crown-anchor-london.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Mettup',
        image: 'https://www.jasminealley.com/wp-content/uploads/2024/08/crown-anchor-london.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    }
]

function HomePage(){
    return(
            <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;