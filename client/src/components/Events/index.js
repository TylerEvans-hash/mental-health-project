import Event from "../Event";

const Events = () => {
    const events = [
        {
            name: "Event 1",
            description: "description 1",
        },
        {
            name: "Event 2",
            description: "description 2",
        },
        {
            name: "Event 3",
            description: "description 3",
        },
        {
            name: "Event 4",
            description: "description 4",
        },
        {
            name: "Event 5",
            description: "description 5",
        },
    ];
    return (
        <section style={{ width: "62%", margin: "50px auto" }}>
            <h2 className="is-size-3">Events</h2>
            <div className="is-flex is-flex-wrap-wrap" >
                {
                    events.map(({name, description}, i) => 
                        <Event 
                            key={i} 
                            name={name}
                            description={description}
                        />
                    )
                }
            </div>
        </section>
    );
}

export default Events;