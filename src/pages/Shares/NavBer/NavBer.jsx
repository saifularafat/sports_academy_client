import Container from "../../../component/Container";
import Logo from "./Logo";
import Profile from "./Profile";

const NavBer = () => {
    return (
        <div className="bg-main_color py-4">
            <Container>
                <div className="flex flex-row items-center justify-between">
                    <Logo />
                    <nav>
                        <ul className="flex items-center gap-x-10 text-white">
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </nav>

                    <div>
                        <Profile />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBer;