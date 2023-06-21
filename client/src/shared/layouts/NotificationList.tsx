import React, { useEffect, useState } from 'react';

import Notification from "../components/Notification";
import { useAppSelector } from '@/store/hook';
import { NotifyData } from '@/store/notifySlice';

const NotificationList = () => {
    const { notifies } = useAppSelector((state) => state.notify);
    const [notifyList, setNotifyList] = useState<NotifyData[]>([]);

    useEffect(() => {
        console.log(`notifies`, notifies);
        setNotifyList(notifies);
    }, [notifies])
    return (
        <>
            {notifyList?.length && <div className='z-20 fixed top-1 right-1 w-full max-w-xs py-1 px-3'>
                {notifyList.map((notify: NotifyData, idx: number) => (
                    <Notification key={'notify' + idx} title={notify.title} message={notify.message} />
                ))}
            </div>}
        </>
    );
};

export default NotificationList;