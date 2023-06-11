import Swal from "sweetalert2";
import { allUsers } from "./useUsers";

const [users, refetch] = allUsers();

export const handlerMakeAdmin = user => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Your web site New Admin selected",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#173931',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes.!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount) {
                        refetch();
                        Swal.fire(
                            'Admin!',
                            `${user.name} is an Admin Now!!`,
                            'success'
                        )
                    }
                })
        }
    })

}