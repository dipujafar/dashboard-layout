import AdvertisementTable from '@/components/(adminDashboard)/advertisement/AdvertisementTable';
import React from 'react';

const AdvertisementPage = () => {
    return (
        <div>
            <h2 className='text-primaryBlack text-4xl font-medium mb-6'>Advertisement</h2>
            <AdvertisementTable></AdvertisementTable>
        </div>
    );
};

export default AdvertisementPage;