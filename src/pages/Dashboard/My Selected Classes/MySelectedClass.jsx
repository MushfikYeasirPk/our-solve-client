import React from 'react';
import useCart from '../../Custom Hooks/useCart';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const MySelectedClass = () => {
    const [ClassCart, refetch] = useCart();
    // console.log(ClassCart);
    const totalPrice = ClassCart.reduce((sum, item) => parseInt(item.price) + sum, 0)
    const deleteClass = item => {
        console.log("item", item);
        Swal.fire({
            title: `Delete ${item.ClassName}  class?`,
            text: "Don't You can add this class from Classes page again!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myselectedclasses/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className=' py-5'>
            <div className='flex justify-around'>
                <div>
                    <p >Total Price to join All Classes :$ {totalPrice}</p>
                </div>
                <div>
                    <Link to='payment'><button className='btn btn-circle'>Pay Now</button></Link>
                </div>
            </div>



            <div className="overflow-x-auto ClassCart flex items-center justify-center">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Delet Item</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {ClassCart.map((singleClass, index) =>

                            <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td>{singleClass.ClassName}</td>
                                <td>{singleClass.instructorName}</td>
                                <td className='text-end'>${singleClass.price}</td>


                                <td ><Link >
                                    <button onClick={() => { deleteClass(singleClass) }} className="btn ">  Delete</button>

                                </Link></td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySelectedClass;