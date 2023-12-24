import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

const Detail: React.FC = () => {
  const { oneProduct } = useSelector((s: RootState) => s);

  console.log(oneProduct);

  return (
    <div>
      <h1>jjj</h1>
    </div>
  );
};

export default Detail;
