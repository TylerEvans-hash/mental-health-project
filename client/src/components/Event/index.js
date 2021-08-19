

const Event = ({ name, description, startDate, endDate }) => {
    return (
        <div class="event card columns">
            <div class="card-content column">
                <p class="title">
                    {name}
                </p>
                <p class="subtitle">
                    {startDate} - {endDate}
                </p>
            </div>
            <div class="card-content column">
                {description}
            </div>
            <footer class="card-footer">
                <button class="button">Join</button>
            </footer>
        </div>
    );
}

export default Event;