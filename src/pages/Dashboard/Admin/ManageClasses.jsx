import { Helmet } from "react-helmet-async";
import DashSectionTitle from "../../../component/DashboardSectionTitle";
import { useAllClasses } from "../../../api/useClasses";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../api/useAxiosSecure";

const ManageClasses = () => {
  const [Classes, refetch] = useAllClasses();
  const [axiosSecure] = useAxiosSecure();

  const handleMakeApproved = (item) => {
    axiosSecure
      .patch(`/classes/approved/${item._id}`)
      .then((response) => {
        const { data } = response;
        console.log("response", data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item?.instructorName} Your Class Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleMakePending = (item) => {
    axiosSecure
      .patch(`/classes/pending/${item._id}`)
      .then((response) => {
        const { data } = response;
        console.log("response", data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item?.instructorName} Your Class Pending`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>SK Academy || Manage Classes</title>
      </Helmet>
      <DashSectionTitle
        name="Classes"
        title="Manage Classes"
        subTitle="All Instructors added by all Classes!"
      />
     <h2 className="text-3xl font-medium p-4">Total Classes : {Classes.length}</h2>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="overflow-x-auto"
      >
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center text-lg">
              <th>Image</th>
              <th>Class Name</th>
              <th>name</th>
              <th>Available Seat</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Classes.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="mask mask-squircle w-14 h-14">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </td>
                <td className=" text-center">{item.name}</td>
                <td>
                  <p className="text-center">
                    {item.instructorName} <br />
                    <span>{item.instructorEmail}</span>
                  </p>
                </td>
                <td className="text-center">{item.seat}</td>
                <td className="">${item.price}</td>
                <td className="text-green-600 font-medium ">{item.status}</td>
               <td>
                  {item?.status === "Approved" ? (
                   "Approved"
                  ) : (
                    <button
                      onClick={() => handleMakeApproved(item)}
                      className="btn btn-xs lowercase  bg-main_color text-base text-white"
                    >
                      Approved
                    </button>
                  )}
                </td>
                <td>
                  {item?.status === "Pending" ? (
                   "Pending"
                  ) : (
                    <button
                      onClick={() => handleMakePending(item)}
                      className="btn btn-xs lowercase bg-orange-600 text-base text-white"
                    >
                      Pending
                    </button>
                  )}
                </td>
                <td>
                  {item?.status === "FeedBack" ? (
                   "FeedBack"
                  ) : (
                    <button
                      onClick={() => handleMakePending(item)}
                      className="btn btn-xs bg-red-500 lowercase text-base text-white"
                    >
                      FeedBack
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

/* app.patch("/users/approved/:id", verifyJWT, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: "Approved",
        },
      };
      const result = await classesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
Mukhlesur Rhaman21:09
<td>
                  {classItem?.status === "Approved" ? (
                    "Approved"
                  ) : (
                    <button
                      onClick={() => handleMakeApproved(classItem)}
                      className="btn btn-xs bg-[#D1A054] text-base text-white"
                    >
                      Approved
                    </button>
                  )}
                </td>
Mukhlesur Rhaman21:10
const handleMakeApproved = (classItem) => {
    axiosSecure
      .patch(`/users/approved/${classItem._id}`)
      .then((response) => {
        const { data } = response;
        if (data.modifiedCount) {
          refetch();
          toast.success(`${classItem?.instructorName} Your Class Added`);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
Mukhlesur Rhaman21:26
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure/useAxiosSecure";
// import useClasses from "../../../components/hooks/useClasses/useClasses";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../components/hooks/useAuth/useAuth";

const ManageClass = () => {
  // const [classes, refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const { loading } = u */

/* import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure/useAxiosSecure";
// import useClasses from "../../../components/hooks/useClasses/useClasses";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../components/hooks/useAuth/useAuth";

const ManageClass = () => {
  // const [classes, refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const { loading } = u
// status change by admin classes
    app.patch("/users/approved/:id", verifyJWT, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: "Approved",
        },
      };
      const result = await classesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.patch("/users/denied/:id", verifyJWT, async (req, res) => {
      const id = req.params.id;
      const fil */

//       Mukhlesur Rhaman20:55
// app.patch("/users/approved/:id", verifyJWT, async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const updateDoc = {
//         $set: {
//           status: "Approved",
//         },
//       };
//       const result = await classesCollection.updateOne(filter, updateDoc);
//       res.send(result);
//     });
// Mukhlesur Rhaman21:09
// <td>
//                   {classItem?.status === "Approved" ? (
//                     "Approved"
//                   ) : (
//                     <button
//                       onClick={() => handleMakeApproved(classItem)}
//                       className="btn btn-xs bg-[#D1A054] text-base text-white"
//                     >
//                       Approved
//                     </button>
//                   )}
//                 </td>
// Mukhlesur Rhaman21:10
// const handleMakeApproved = (classItem) => {
//     axiosSecure
//       .patch(`/users/approved/${classItem._id}`)
//       .then((response) => {
//         const { data } = response;
//         if (data.modifiedCount) {
//           refetch();
//           toast.success(`${classItem?.instructorName} Your Class Added`);
//         }
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };
// Mukhlesur Rhaman21:26
// import { toast } from "react-hot-toast";
// import useAxiosSecure from "../../../components/hooks/useAxiosSecure/useAxiosSecure";
// import useClasses from "../../../components/hooks/useClasses/useClasses";
// import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../components/hooks/useAuth/useAuth";

// const ManageClass = () => {
// const [classes, refetch] = useClasses();
//   const [axiosSecure] = useAxiosSecure();
//   const { loading } = useAuth()
// status change by admin classes
// app.patch("/users/approved/:id", verifyJWT, async (req, res) => {
//   const id = req.params.id;
//   const filter = { _id: new ObjectId(id) };
//   const updateDoc = {
//     $set: {
//       status: "Approved",
//     },
//   };
//   const result = await classesCollection.updateOne(filter, updateDoc);
//   res.send(result);
// });

// app.patch("/users/denied/:id", verifyJWT, async (req, res) => {
//   const id = req.params.id;
//   const fil
