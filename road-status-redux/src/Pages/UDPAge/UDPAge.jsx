import { useDispatch, useSelector } from "react-redux";
import UpdateForm from "../../Components/UpdateForm/UpdateForm";
import { useParams } from "react-router-dom";

const UDPAge = () => {
  const { id: roadId } = useParams();
  const { value: roads } = useSelector((state) => state.roads);
  const foundStatus = roads.find((road) => road.id === Number(roadId));

  return (
    <section className="container p-4 mx-auto">
      <UpdateForm foundStatus={foundStatus} />
    </section>
  );
};
export default UDPAge;
