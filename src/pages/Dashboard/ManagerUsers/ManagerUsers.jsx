import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManagerUsers = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    })
    const handleMakeAdmin=(singleUser)=>{
        fetch(`http://localhost:5000/users/admin/${singleUser._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${singleUser.name} will play as Admin Now!`,
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        })
    
    }


    return (
        <div>
            <div className='flex items-center justify-center py-5'>
                <p className='text-5xl'>Total users {users.length}</p>
            </div>
            
            <div className='flex items-center justify-center'>
            <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th> Name</th>
                            <th>Instructor Name</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((singleUser, index) =>

                            <tr key={singleUser._id}>
                                <th>{index + 1}</th>
                                <td>{singleUser.name}</td>
                                <td>{singleUser.email}</td>
                                


                                <td ><Link>
                                    <button onClick={() => { deleteClass(singleUser) }} className="btn ">Make Instructor</button>

                                </Link></td>
                                <td ><Link >
                                    {
                                        singleUser.role === 'admin' ? "Admin" : <> <button onClick={() => { handleMakeAdmin(singleUser) }} className="btn ">Make Admin</button></>
                                    }

                                </Link></td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagerUsers;