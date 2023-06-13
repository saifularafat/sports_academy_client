import { FaAtlas, FaRegClock, FaUserNurse, FaDollarSign } from "react-icons/fa";
import useAuth from "../../component/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sport = ({ approvedSports }) => {
  console.log(approvedSports);
  const { user } = useAuth();
  const [disabledCart, setDisabledCart] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { _id, sportsName, image, price, instructorName, email } = approvedSports
  const handlerBookMark = (approvedSports) => {
    if (user) {
      const BookItem = {
        classBookMarkId: _id,
        className: sportsName,
        classImage: image,
        price: parseFloat(price),
        instructorName,
        instructorEmail: email,
        email: user?.email,
        userName: user?.displayName,
      };
      console.log(BookItem);
      axios.post(`${import.meta.env.VITE_API_URL}/bookMarks`, BookItem)
        .then(res => {
          console.log(res);
          if (res.data.insertedId) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Sports Class Added to the Dashboard',
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      setDisabledCart(true);
    }
    else {
      Swal.fire({
        title: 'Please Login to order the food.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1500"
      className="card w-full h-fit glass md:mx-auto border-main_color rounded-2xl"
    >
      <div className="">
        <img className="h-[200px] w-full" src={approvedSports?.image} alt="sport image" />
      </div>
      <div className="card-body shadow-2xl">
        <div className="flex justify-evenly">
          <p className="font-light flex items-center  gap-2">
            <FaAtlas />3 Lessons{" "}
          </p>
          <p className="font-light flex items-center gap-2">
            <FaRegClock />
            3h 30m
          </p>
          <p className="font-light flex items-center gap-2">
            <FaUserNurse /> Students
          </p>
        </div>

        <p className="text-2xl font-mono">{approvedSports?.sportsName}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <div className="flex justify-between">
          {" "}
          <h2 className="text-lg font-serif">
            Available Seat : <span className="text-2xl">{approvedSports?.seat}</span>
          </h2>
          <h2 className="flex items-center text-2xl text-blue-700">
            <FaDollarSign />
            {approvedSports?.price}
          </h2>
        </div>

        <div className="divider"></div>
        <div className="card-actions justify-between">
          <div tabIndex={0} className=" flex items-center avatar">
            <div className="w-12 p-[2px] border border-main_color rounded-full">
              <img src={approvedSports?.instructorImage} alt="instructor img" />
            </div>
            <h2 className="ml-2 text-lg hover:text-blue-600 font-medium font-sans">
              {approvedSports?.instructorName}
            </h2>
          </div>
          <div>
            {/* {
              user?.role === 'admin' && user?.role === 'instructor' ?
                <>this is  text</>
                :
                <>
                  <button
                    onClick={() => handlerBookMark(approvedSports)}
                    disabled={disabledCart}
                    className="bg-orange-600 text-white p-[6px] px-4 rounded-xl uppercase mr-2">
                    Add
                  </button>
                  <Link to={`/dashboard/payment/${approvedSports._id}`}>
                    <button className="bg-main_color text-white p-[6px] rounded-xl px-4 uppercase">
                      pay
                    </button>
                  </Link>
                </>
            } */}
            <button
              onClick={() => handlerBookMark(approvedSports)}
              disabled={disabledCart}
              className="bg-orange-600 text-white p-[6px] px-4 rounded-xl uppercase mr-2">
              Add
            </button>
            <Link to={`/dashboard/payment/${approvedSports._id}`}>
              <button className="bg-main_color text-white p-[6px] rounded-xl px-4 uppercase">
                pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;
