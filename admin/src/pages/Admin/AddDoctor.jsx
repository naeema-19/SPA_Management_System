import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (!docImg) {
            return toast.error('Image Not Selected');
        }

        console.log({
            name,
            email,
            password,
            phone,
            image: docImg,
        });

        toast.success('Doctor added successfully!');
    };

    return (
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Add Staff</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                {/* Image Upload */}
                <div className="mb-6">
                    <label htmlFor="doc-img" className="flex items-center gap-4 cursor-pointer">
                        <img
                            className="w-20 h-20 bg-gray-100 rounded-full object-cover"
                            src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                            alt="Doctor"
                        />
                        <div>
                            <span className="block font-medium text-gray-600">Upload Picture</span>
                            <span className="text-sm text-gray-400">Click to select an image</span>
                        </div>
                    </label>
                    <input type="file" id="doc-img" hidden onChange={(e) => setDocImg(e.target.files[0])} />
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Set Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition"
                >
                    Add Staff
                </button>
            </div>
        </form>
    );
};

export default AddDoctor;
