import { FaInstalod, FaUsers } from "react-icons/fa";
import { allUsers } from "../../../../api/useUsers";
import { MdOutlinePayment, MdSportsEsports } from "react-icons/md";
import { useAllClasses } from "../../../../api/useClasses";
import { useAllPayment } from "../../../../api/usePayment";

const TopCategory = () => {
    const [users] = allUsers();
    const [bookMark] = useAllClasses();
    const [payments] = useAllPayment();
    console.log(payments);
    const classTrainer = users.filter(
        (trainers) => trainers.role === "instructor"
      );
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-secondary-content">
            <div className="shadow-2xl rounded-lg py-1 px-2 bg-neutral-focus">
                <h2 className="text-center font-semibold text-lg md:text-xl">Total Users</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <FaUsers className="md:text-4xl text-2xl"/>
                    <span className="md:text-2xl text-xl font-medium">{users?.length}</span>
                </div>
            </div>
            <div className="shadow-2xl rounded-lg py-1 px-2 bg-neutral-focus">
                <h2 className="text-center font-semibold text-lg md:text-xl">Total Sports</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <MdSportsEsports className="md:text-4xl text-2xl"/>
                    <span className="md:text-2xl text-xl font-medium">{bookMark?.length}</span>
                </div>
            </div>
            <div className="shadow-2xl rounded-lg py-1 px-2 bg-neutral-focus">
                <h2 className="text-center font-semibold text-lg md:text-xl">All Payment</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <MdOutlinePayment className="md:text-4xl text-2xl"/>
                    <span className="md:text-2xl text-xl font-medium">{payments?.length}</span>
                </div>
            </div>
            <div className="shadow-2xl rounded-lg py-1 px-2 bg-neutral-focus">
                <h2 className="text-center font-semibold text-lg md:text-xl">All Instructor</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <FaInstalod className="md:text-4xl text-2xl"/>
                    <span className="md:text-2xl text-xl font-medium">{classTrainer?.length}</span>
                </div>
            </div>

        </div>
    );
};

export default TopCategory;