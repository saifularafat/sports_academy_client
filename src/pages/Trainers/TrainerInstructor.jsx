import Button from "../../component/Button";

const TrainerInstructor = ({ trainer }) => {
  console.log(trainer);
  return (
    <div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className="card md:w-96 mx-3 h-fit bg-base-100 shadow-md hover:shadow-2xl"
      >
        <>
          <img src={trainer?.image} alt="robot" className="md:h-96 rounded-lg" />
        </>
        <div className="card-body">
          <h2 className="card-title sub_title">Name: {trainer?.name}</h2>
          <h2 className="card-title text-sm">Email: {trainer?.email}</h2>
          <h2>Coach: Head coach</h2>
          <div className="md:text-right text-center">
            <Button 
            adders='/classes/' 
            label='See Class'
            btnBorderColor="border-accent" 
            btnTextColor="text-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerInstructor;
