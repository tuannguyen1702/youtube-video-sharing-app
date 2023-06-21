import Link from "next/link";
import Image from "next/image";
import LoginAndRegister from "@/modules/user/containers/LoginAndRegister";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { getProfile } from "@/modules/user/store/userThunks";
import Logout from "@/modules/user/containers/Logout";
import Button from "../components/Button";
import { useRouter } from "next/router";
import NotificationList from "./NotificationList";

const Header = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);

    useEffect(() => {
        dispatch(getProfile());
    }, [])

    const goToSharePage = () => {
        router.push('/share')
    }

    return (
        <>
            <header className="border-b fixed top-0 left-0 right-0 h-16 flex bg-white z-10">
                <nav
                    className="mx-auto w-full flex max-w-7xl items-center justify-between p-6 lg:px-8"
                    aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-3">
                            <Image
                                src="/home.png"
                                width={30}
                                height={30}
                                alt="Home"
                            />
                            <h1 className="text-lg">Funny Movies</h1>
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {user ? <div>Welcome: {user.email} <Button className="mx-3" onClick={goToSharePage}>Share a movie</Button> <Logout /></div> : <LoginAndRegister />}
                    </div>
                </nav>
            </header>
            <NotificationList />
        </>

    );
};

export default Header;
