import { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

const CategoryPage = () => {

    const [list, setList]  = useState([]);

    useEffect(() => {
        getList();
    });

    const getList = () => {
        axios({
            url: "http://127.0.0.1:8000/api/products",
            method: "GET"
        }).then(res => {
            // console.log(res.data);
            if(res.data){
                setList(res.data.products);
            }
        }).catch(err=> {
            console.log(err);
        })
    }

    const onDelete = (item) =>{
        // console.log(item.id);
        axios({
            url: "http://127.0.0.1:8000/api/products",
            method: "DELETE",
            data: {"id": item.id}
        }).then(res => {
            console.log(res);
            getList();
        }).catch(err=> {
            console.log(err);
        })
    }
    
    return(
        <div className="container mx-auto">
            <div className="flex justify-between mt-20 mb-6">
                <h1 className="text-3xl font-bold text-black">Category List</h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Create New</button>
            </div>
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md mb-6">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-base text-gray-900">Name</th>
                        <th className="px-6 py-4 font-semibold text-base text-gray-900">Image</th>
                        <th className="px-6 py-4 font-semibold text-base text-gray-900">Ordering</th>
                        <th className="px-6 py-4 font-semibold text-base text-gray-900">Status</th>
                        <th className="px-6 py-4 font-semibold text-base text-gray-900">Action</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {list.map((item, index) => {
                            return(
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-black text-base">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                    <div className="h-20 w-20">
                                        <img
                                        className="h-full w-full rounded-lg object-cover object-center"
                                        src={item.image}
                                        alt="Thumbnail"
                                        />
                                    </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                        Active
                                    </span>
                                    </td>
                                    <td className="px-6 py-4">
                                    <div className="flex justify-start gap-4">
                                        <FiEdit className="text-2xl text-green-500 cursor-pointer" />
                                        <FiTrash2 onClick={()=> onDelete(item)} className="text-2xl text-red-500 cursor-pointer" />
                                        {/* <FiEye className="text-2xl text-gray-800 cursor-pointer" /> */}
                                    </div>
                                    </td>
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}  

export default CategoryPage;