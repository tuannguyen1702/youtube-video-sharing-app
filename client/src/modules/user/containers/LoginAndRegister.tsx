import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import LoginAndRegisterForm from '../components/LoginAndRegisterForm';
import { loginOrRegister } from '../store/userThunks';

const LoginAndRegister = () => {
    const dispatch = useAppDispatch();
    const { user, loading } = useAppSelector((state) => state.user);
    const handleSubmit = (email: string, password: string) => {
        dispatch(loginOrRegister({ email, password }));
    };

    return <LoginAndRegisterForm isSubmitting={loading} onSubmit={handleSubmit} />
};

export default LoginAndRegister;