import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationIcon: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='relative inline-block'>
            <button 
                className="rounded-full bg-white border-[1px] border-[#80BAA8] p-2 w-11 h-11 mr-2"
                onClick={() => setOpen(!open)}
            >
                <NotificationsIcon className="text-[#80BAA8]" />
            </button>
            {open && (
                <div className="absolute top-full right-0 mt-2 w-24 h-24 bg-white border-gray-200 border-[1px] flex items-center justify-center">
                    <span className="text-white">1</span>
                </div>
            )}
            
        </div>
    );
};
export default NotificationIcon;

