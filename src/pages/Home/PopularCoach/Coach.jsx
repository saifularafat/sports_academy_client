import Button from "../../../component/Button";

const Coach = ({ person }) => {
    return (
        <div 
        data-aos="fade-up"
        data-aos-duration="3000"
        className="hover:shadow-2xl shadow-md rounded-lg transition duration-200">
            <div
                className="relative md:w-[350px] mx-auto">
                <img src={person?.image} alt="Coach-image" className="w-full md:h-80 h-64 rounded-lg grayscale transition duration-500" />
                <div className="absolute top-0 left-0 w-full md:h-80 h-64 opacity-0 hover:opacity-100 transition duration-500 ">
                    <img src={person?.image} alt="Coach-image" className="w-full md:h-80 h-64 rounded-lg grayscale-0" />
                </div>
                <div className="md:pl-4 my-4">
                    <p className="text-xl">Name: {person?.name}</p>
                    <p className="pb-2 text-lg">Email: {person?.email}</p>
                    <Button
                        label='All Sports'
                        adders='/classes'
                        btnBorderColor="border-accent" 
                        btnTextColor="text-accent"
                        >
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Coach;