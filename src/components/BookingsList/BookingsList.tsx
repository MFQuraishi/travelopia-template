import "./BookingsList.scss";
import mockData from "./mockdata";

export default function BookingsList() {
  return (
    <div className="bookings-list-master-container">
      <div className="bookings-list-heading">Enquiries Received</div>
      <div className="bookings-list-container">
        {mockData.map((enquiry, idx) => {
          return (
            <div className="enquiry-card-container" key={idx}>
              <div className="enquiry-card-index-tag">{idx + 1}</div>
              <div className="flex-space-between">
                <div className="enquiry-card-place-name">{enquiry.place}</div>

                <div>
                  {<span className="font-bold"> {enquiry.travellers} </span>}{" "}
                  {enquiry.travellers > 1 ? " travellers" : "traveller"}
                </div>
              </div>

              <div className="flex-space-between card-footer">
                <div className="enquiry-card-travel-type"><span className="font-bold"> {`Travel type:`} </span>{enquiry.travelType}</div>
                <div>
                  {<span className="font-bold"> {`budget:`} </span>}{<span>{`${enquiry.budgetFrom} - ${enquiry.budgetTo}`}</span>}
                </div>
              </div>

              <div className="card-cta-container">
                <button className="card-cta">
                    {"more info >>"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
