import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

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

function HomePage(props){

    return(
            <MeetupList meetups={props.meetups} />
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res 

//     return{
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){

    const client = await MongoClient.connect(
      'mongodb+srv://antoninaparulava_db_user:2p8618Bef50E8Ow8@cluster0.zztfbxa.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close()

    return{
        props:{
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    }
}

export default HomePage;