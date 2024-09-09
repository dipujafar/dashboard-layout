import AdvertisementTable from '@/components/(adminDashboard)/advertisement/AdvertisementTable';
import React from 'react';

const AdvertisementPage = () => {
    return (
        <div>
            <h2 className='text-primaryBlack text-[40px] font-medium mb-6'>Advertisement</h2>
            <AdvertisementTable></AdvertisementTable>
        </div>
    );
};

export default AdvertisementPage;