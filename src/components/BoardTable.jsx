import React from 'react';

const customers = [
    { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
    { name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
    { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
    { name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
    { name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
    { name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Inactive' },
    { name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
];

const CustomerTable = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">All Customers</h1>
            <div className="overflow-x-auto overflow-y-auto max-h-[600px] lg:max-h-[400px]">
                <table className="w-full  bg-white border border-gray-200">
                    <thead>
                        <tr className="w-full text-[#B5B7C0]">
                            <th className="py-5 px-4 border-b">Customer Name</th>
                            <th className="py-5 px-4 border-b">Company</th>
                            <th className="py-5 px-4 border-b">Phone Number</th>
                            <th className="py-5 px-4 border-b">Email</th>
                            <th className="py-5 px-4 border-b">Country</th>
                            <th className="py-5 px-4 border-b">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-2 px-4 border-b font-[500]">{customer.name}</td>
                                <td className="py-2 px-4 border-b font-[500]">{customer.company}</td>
                                <td className="py-2 px-4 border-b font-[500]">{customer.phone}</td>
                                <td className="py-2 px-4 border-b font-[500]">{customer.email}</td>
                                <td className="py-2 px-4 border-b font-[500]">{customer.country}</td>
                                <td className="py-6 px-4 border-b font-[500]">
                                    <span className={`py-1  border-[1px] font-[500] rounded-[4px] text-white ${customer.status === 'Active' ? 'bg-[#92fae2] px-5 text-[rgb(0,176,135)] border-[#00B087]' : 'bg-[#FFC5C5] border-[#DF0404] text-[red] px-4'}`}>
                                        {customer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default CustomerTable;