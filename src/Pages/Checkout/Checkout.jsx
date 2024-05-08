import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const loadData = useLoaderData()
    // console.log(loadData);
    const handlesubmit = e=>{
        e.preventDefault();
        const form = e.target ;
        const image = loadData.img;
        const title = loadData.title;
        const price = loadData.price;
        const serviceId= loadData.service_id
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const phone = form.phone.value
        const email = form.email.value
        const description = form.description.value
        const serviceInfo ={
            firstName,lastName,phone,email,description,image,
            title,
            price,
            serviceId
        }
        // console.log(serviceInfo);
        fetch('https://cars-doctor-server-rotons-projects.vercel.app/bookings', {
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },
          body : JSON.stringify(serviceInfo)
        }).then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.acknowledged) {
            alert('order has been addeded')
          }
        })
    }
  return (
    <div className="px-20  bg-gray-100  py-5">
      <h1 className="text-4xl text-center font-bold my-5">CheekOut </h1>
      <form onSubmit={handlesubmit}>
        <div className=" max-w-screen-md mx-auto space-y-8">
        <div className="flex gap-4">
        <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-primary w-1/2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-primary w-1/2"
          />
        </div>
         <div className="flex gap-4">
         <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered input-primary w-1/2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="input input-bordered input-primary w-1/2"
          />
         </div>
        <textarea
          name="description"
          placeholder="Description about services"
          className="textarea textarea-bordered textarea-lg w-full "
        ></textarea>
        <input className="btn btn-secondary btn-block" type="submit" value="Order Confirmed" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
