import Event from "../Event";

const Events = () => {
    const events = [
        {
            name: "Morning Mediation in the Park",
            description: "Come out and spend time with the community and learn mindfulness skills that can help with stress, focus, and improve our moods! Bring water or your favorite sports drink, and a blanket or yoga mat to sit on.  ",
            startDate: "August 21, 2021 9:00am",
            endDate: "10:00am",
            address: "623 N. Easy St. Nowhere, AZ 45987",
        },
        {
            name: "Sunset Hiking",
            description: "What a way to end the day by going on a hike to watch the sunset! Bring a flash light and plenty of water to stay hydrated. We will make stops on the trail to catch our breath and make sure nobody is left behind. Please stay in the group and feel free to talk with fellow hikers. ",
            startDate: "August 21, 6:30pm",
            endDate: "8:30pm",
            address: "597 E. Mountain Parkway. Big Mountain, AZ 75896",
        },
        {
            name: "Listen! Awareness Event",
            description: " Come Listen! We are putting on a event to help spread awareness on mental health issues that are happening right now. Covering topics such as suicide, depression, and other various mental health issues. We will have resources on how to find help. Tips on what you can do to help others and how to be aware.",
            startDate: "August 25th, 6:00pm",
            endDate: "8:00pm",
            address: "431 W. Apple Rd. Burnsley, AZ 15987",
        },
        {
            name: "Friday Stretch",
            description: "Need to loosen up after a long week working from home? This is perfect event to get the body moving without over exerting yourself. Stretching is something that is often over looked when taking care of the body. So come out and learn some new stretches to stay loose and meet some new faces!",
            startDate: "August 27, 5:30pm",
            endDate: "7:00pm",
            address: "1564 E. Rose Field Ct. Millstone, AZ 32648",
        },
        {
            name: "Sunday Sunrise Hike",
            description: "Start the day right with some exercise to get the blood going and watching the sunrise from the top of a mountain. Bring plenty of water, and a snack if you like. We will leave at 5:30am sharp! so try not to be late. We will take breaks to catch our breath and make sure we all stick together in our group. Feel free to talk with fellow hikers and have a great time. ",
            startDate: "August 29, 5:30am",
            endDate: "7:00am",
            address: "829 S. Hillside Rd. Wellsprings, AZ 56214",
        },
        {
            name: "Community Art Showcase",
            description: "Are you someone with artistic skill? Come out and share your work and talk about your passions with other's. Painting, drawing, sculptures, glass blowing are all different ways that we can express ourselves.   ",
            startDate: "September 2, 5:00pm",
            endDate: "8:00pm",
            address: "9742 N. Grass Parkway. Greenflower, AZ 26574",
        },
        {
            name: "Yoga in the Park",
            description: "Join us for learning relaxation techniques and muscle conditioning. By practicing yoga you will strengthen the body and mind connection, improve flexibility, and balance. Please bring your own yoga mat and water to drink.  ",
            startDate: "September 4, 5:30pm",
            endDate: "6:30pm",
            address: "623 N. Easy St. Nowhere, AZ 45987",
        },
        {
            name: "Nature Walk",
            description: "Love nature? Go for a walk in a group to explore new areas together in a safe environment. Meet new people with the same interest as you. Please bring plenty of water and a small snack just in case you get hungry. We will make stops along the trail to catch our breath and take in the views!",
            startDate: "September 5, 12:30pm",
            endDate: "2:30pm",
            address: "1197 W. Rabbit Trail Rd. West Lake, AZ 48519",
        },
        {
            name: "Suicide Prevention Awareness Week! ",
            description: "Suicide awareness week starts on September 5th and ends on September 11th. We want to spread awareness to help those who need it most. Offering resources how to find help, how to try and prevent it, and what leads someone to suicide. With spreading awareness we can help our communities to grow and be stronger.",
            startDate: "September 5, 3:30pm",
            endDate: "5:30pm",
            address: "374 N. Happy Ave. Nowhere, AZ 45987",
        },
        {
            name: "Mountain Biking Trail Run",
            description: "Do you enjoy mountain biking? Come join us on the trail together and meet others that like riding as much as you do. Interact with your community make new friends with similar interest. Please bring your own mountain bike and plenty of water to stay hydrated. Also safety gear such as helmet, gloves, and pads are recommended!",
            startDate: "September 9, 8:30am",
            endDate: "10:30am",
            address: "4865 E. Jaws Trail. Big Mountain, AZ 75896",
        },
    ];
    return (
        <>
            <h2 className="is-size-3 has-text-centered mb-6">Events</h2>
            <div className="column is-full" >
                {
                    events.map(({ name, description, startDate, endDate, address }, i) =>
                        <Event
                            key={i}
                            name={name}
                            description={description}
                            startDate={startDate}
                            endDate={endDate}
                            address={address}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Events;