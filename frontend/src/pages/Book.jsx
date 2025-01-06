import React, { useState } from 'react';
import { salonData } from '../assets/assets'; // Assuming your salonData is exported from a file named assets.js


const Book = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        staff: '',
        services: []  // Array for storing selected services
    });

    const [expandedCategories, setExpandedCategories] = useState([]);
    const [servicesToShow, setServicesToShow] = useState(5); // Number of services to show initially

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        if (name === 'services') {
            setFormData(prevState => {
                const updatedServices = checked
                    ? [...prevState.services, value]
                    : prevState.services.filter(service => service !== value);

                return { ...prevState, services: updatedServices };
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    const handleToggleCategory = (category) => {
        setExpandedCategories(prevState =>
            prevState.includes(category)
                ? prevState.filter(cat => cat !== category)
                : [...prevState, category]
        );
    };

    const handleLoadMore = () => {
        setServicesToShow(servicesToShow + 5); // Show 5 more services on click
    };

    // Calculate the total cost of the selected services
    const totalCost = formData.services.reduce((total, service) => {
        const category = salonData.find(c => c.services.some(s => s.name === service));
        const serviceObj = category?.services.find(s => s.name === service);
        if (serviceObj && serviceObj.price !== 'Starting from') {
            return total + parseFloat(serviceObj.price.replace(' OMR', '').replace('Starting from ', ''));
        }
        return total;
    }, 0);

    return (
        <div id="book" className="flex flex-col gap-6 p-8 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-medium text-gray-700 mb-6">Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Phone Number Input */}
                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-sm font-medium text-gray-700">Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Staff Selection */}
                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-sm font-medium text-gray-700">Choose Staff:</label>
                    <select
                        name="staff"
                        value={formData.staff}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="">Select Staff</option>
                        <option value="staff1">Staff 1</option>
                        <option value="staff2">Staff 2</option>
                        <option value="staff3">Staff 3</option>
                    </select>
                </div>

                {/* Services Selection (Collapsible Categories) */}
                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-sm font-medium text-gray-700">Choose Service(s):</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {salonData.map(category => (
                            <div key={category.category} className="w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">{category.category}</h3>
                                    <button
                                        type="button"
                                        onClick={() => handleToggleCategory(category.category)}
                                        className="text-primary"
                                    >
                                        {expandedCategories.includes(category.category) ? 'Collapse' : 'Expand'}
                                    </button>
                                </div>

                                {/* Collapsible Services */}
                                {expandedCategories.includes(category.category) && (
                                    <div className="space-y-2 mt-2">
                                        {category.services.slice(0, servicesToShow).map(service => (
                                            <label key={service.name} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    name="services"
                                                    value={service.name}
                                                    checked={formData.services.includes(service.name)}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                {service.name}
                                                <span className="text-sm text-gray-500">({service.price})</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Load More Button 
                    <div className="flex justify-center mt-4">
                        <button
                            type="button"
                            onClick={handleLoadMore}
                            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Load More
                        </button>
                    </div>*/}
                </div>

                {/* Display total cost */}
                {formData.services.length > 0 && (
                    <div className="text-lg font-medium text-gray-700 mt-4">
                        Total Cost: {totalCost} OMR
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Book;
