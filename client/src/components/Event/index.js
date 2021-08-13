import "bulma/css/bulma.css";

const Event = ({name, description}) => {
    return (
        <div className="event card">
            <header className="card-header">
                <p className="card-header-title">
                    {name}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default Event;