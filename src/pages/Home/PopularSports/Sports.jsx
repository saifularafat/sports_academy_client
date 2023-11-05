import Button from "../../../component/Button";

const Sports = ({ popular }) => {
    console.log(popular);
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="card w-96 bg-base-100  hover:shadow-2xl shadow-md">
            <figure>
                <img src={popular?.classImage} alt="Sport" className="w-full h-64" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Sports: <span>{popular?.className}</span></h2>
                <p>Coach Email: <span>{popular?.instructorEmail}</span></p>
                <div className="card-actions justify-end">
                    <Button label='Classes' adders='/classes'></Button>
                </div>
            </div>
        </div>
    );
};

export default Sports;