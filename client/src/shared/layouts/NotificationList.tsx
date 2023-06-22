import React, { useEffect, useState } from 'react';

import Notification from "../components/Notification";
import { useAppSelector } from '@/store/hook';
import { NotifyData } from '@/store/notifySlice';

const NotificationList = () => {
    const { notifies } = useAppSelector((state) => state.notify);

    return (
        <>
            {notifies?.length > 0 && <div className='z-20 fixed top-1 right-1 w-full max-w-md py-1 px-3'>
                {notifies.map((notify: NotifyData, idx: number) => (
                    <Notification key={'notify_' + idx} {...notify} />
                ))}
            </div>}
        </>
    );
};

export default NotificationList;