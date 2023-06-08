import Button from "../../../component/Button";

const Coach = ({ person }) => {
    console.log(person);
    return (
        <div className=" hover:shadow-xl rounded-lg transition duration-200">
            <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="relative md:w-[350px] mx-auto">
                <img src={person.coach_img} alt="Coach-image" className="w-full md:h-80 h-64 grayscale transition duration-500" />
                <div className="absolute top-0 left-0 w-full md:h-80 h-64 opacity-0 hover:opacity-100 transition duration-500 ">
                    <img src={person.coach_img} alt="Coach-image" className="w-full md:h-80 h-64 grayscale-0" />
                </div>
                <div className="md:pl-4 my-4">
                    <p className="text-xl">Name: {person.name}</p>
                    <p className="pb-2 text-lg">Coach: {person.coach}</p>
                    <Button
                        label='All Sports'
                        adders='/'>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Coach;