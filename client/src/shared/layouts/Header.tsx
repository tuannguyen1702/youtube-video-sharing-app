import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="border-b">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
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
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
