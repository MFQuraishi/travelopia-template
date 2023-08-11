import "./UserRegisterForm.scss"

export default function UserRegisterForm() {
    return (
        <div className="form-base-plate">
            <p className="form-base-heading">
                Choose options to create your trip
            </p>

            <div className="form-dropdown-legend-container">
                <p className="form-dropdown-legend">
                    Select Country
                </p>
            </div>
            <select className="form-dropdown-select">
                <option value="Country A">Country A</option>
                <option value="Country B">Country B</option>
            </select>

            <div className="form-dropdown-legend-container">
                <p className="form-dropdown-legend">
                    Travel Type
                </p>
            </div>
            <select className="form-dropdown-select">
                <option value="Type A">Type A</option>
                <option value="Type B">Type B</option>
            </select>

            <div className="form-dropdown-legend-container">
                <p className="form-dropdown-legend">
                    No. Of travelers
                </p>
            </div>
            <select className="form-dropdown-select">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>

            <div className="form-dropdown-legend-container">
                <p className="form-dropdown-legend">
                    Budget
                </p>
            </div>
            <select className="form-dropdown-select">
                <option value="A-B">A - B</option>
                <option value="B-C">B - C</option>
            </select>

            <button className="form-button">
                Create my trip now
            </button>
        </div>
    );
}