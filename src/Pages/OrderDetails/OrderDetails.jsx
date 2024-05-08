import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../../Shared/Footer/Footer";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OrderDetails = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const url = `/bookings?email=${user?.email}`
  useEffect(() => {
    // axios.get(url , {withCredentials:true})
    axiosSecure.get(url)
    .then(res =>{
      setBookings(res.data)
      // console.log(res.data)
    })
    // fetch()
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //     console.log(data);
    //   });
  }, [axiosSecure, url]);
  const handleDelete = id =>{
    console.log(id);
    fetch(`https://cars-doctor-server-rotons-projects.vercel.app/bookings/${id}`, {
      method:"DELETE"
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.deletedCount) {
        alert('deleted succesfull')
        const remaining = bookings.filter(booking => booking._id !== id)
        setBookings(remaining)
      }
    })
  }
  const handleUpdate = id =>{
    // console.log(id);
    fetch(`https://cars-doctor-server-rotons-projects.vercel.app/bookings/${id}`, {
      method:'PATCH',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status:'confirm'})
    }).then(res=> res.json())
    .then(data =>{
      console.log(data);
      if (data.modifiedCount > 0) {
        alert('updated succesfull')
        const remaining = bookings.filter(booking=> booking._id !== id)
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'confirmed'
        // console.log(updated);
        const newBookings = [updated, ...remaining]
        setBookings(newBookings)
      }
    })
  }
  return (
    <div>
      <div className="min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Service Title</th>
                <th>Price</th>
                <th>phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <button onClick={()=>handleDelete(booking._id)} className="btn btn-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-xl">
                        <img src={booking.image} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{booking.title}</div>
                  </td>
                  <td>
                    <div className="text-sm opacity-50">{booking.price}</div>
                  </td>
                  <td>
                  <div className="text-sm opacity-50">{booking.phone}</div>
                  </td>
                  <th>
                    {
                      booking.status ==='confirmed'? <span><h1 className="text2xl">Pending</h1></span>:<button onClick={()=>handleUpdate(booking._id)} className="btn btn-ghost btn-xs">Confirm</button>
                    }
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OrderDetails;
