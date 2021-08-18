
const Event = ({name, description}) => {
    return (
        <div className="event card">
            <div className="card-header">
                <p className="card-header-title">
                    {name}
                </p>
            </div>
            <div className="card-content">
                <div className="content">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default Event;