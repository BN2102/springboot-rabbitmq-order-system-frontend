import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div>
      <Link to={"/Test1"}><p className="text-5xl text-red-600 hover:text-blue-500" >Nguyễn Trí Kỳ</p></Link>
    </div>
    </>
  );
};

export default Home;
