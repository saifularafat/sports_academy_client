import Container from "../../../component/Container";
import icon1 from './../../../assets/icon/footbalicon.png'
import icon2 from './../../../assets/icon/cricket-icon-1.png'
import icon3 from './../../../assets/icon/archer-icon.png'
import icon4 from './../../../assets/icon/basketboll-icon.png'

const Sports = () => {
    return (
        <Container>
            <div
                className="grid md:grid-cols-4 grid-cols-1 gap-5">
                <div
                    data-aos="zoom-in"
                    className="sports_div">
                    <img src={icon1} alt="" className="md:w-32 md:h-32" />
                    <h4 className="text-2xl font-semibold text-green-900 pb-2">World class academy coaches and player development team</h4>
                    <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel unde? Voluptas in dolore quos, impedit perspiciatis quia libero deserunt</p>
                </div>
                <div
                    data-aos="zoom-in-down"
                    className="sports_div">
                    <img src={icon2} alt="" className="md:w-32 md:h-32" />
                    <h4 className="text-2xl font-semibold text-green-900 pb-2">World class academy coaches and player development team</h4>
                    <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel unde? Voluptas in dolore quos, impedit perspiciatis quia libero deserunt</p>
                </div>
                <div
                    data-aos="zoom-out"
                    className="sports_div">
                    <img src={icon3} alt="" className="md:w-32 md:h-32" />
                    <h4 className="text-2xl font-semibold text-green-900 pb-2">World class academy coaches and player development team</h4>
                    <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel unde? Voluptas in dolore quos, impedit perspiciatis quia libero deserunt</p>
                </div>
                <div
                    data-aos="zoom-in-down"
                    className="sports_div">
                    <img src={icon4} alt="" className="md:w-32 md:h-32" />
                    <h4 className="text-2xl font-semibold text-green-900 pb-2">World class academy coaches and player development team</h4>
                    <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel unde? Voluptas in dolore quos, impedit perspiciatis quia libero deserunt</p>
                </div>

            </div>
        </Container>
    );
};

export default Sports;