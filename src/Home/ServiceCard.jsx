import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('https://cars-doctor-server-rotons-projects.vercel.app/services')
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <div>
      <div className="flex w-full flex-col justify-center text-center mt-20 space-y-2">
        <p className="text-red-600 ">Service</p>
        <h1 className="text-4xl  font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
        {service.map((service) => (
          <div key={service._id} className="card  bg-base-100 ">
            <figure className="px-7">
              <img src={service.img} alt="Shoes" className="rounded-md" />
            </figure>
            <div className="flex justify-between p-7">
             <div> <h2 className="card-title">{service.title}</h2>
              <p className="text-red-600">Price : ${service.price}</p></div>
              <div className="card-actions">
                <Link to={`/checkout/${service._id}`}>
                <button className="btn  btn-outline">
                 Booking Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
