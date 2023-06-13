// import { instructorsFetch } from "../../api/useClasses";

// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { allUsers } from "../../api/useUsers";
const Details = () => {
    const [users] = allUsers()
    // console.log(users);
    const classTrainer = useLoaderData();
    // console.log(classTrainer);
    return (
        <div>

        </div>
    );
};

export default Details;