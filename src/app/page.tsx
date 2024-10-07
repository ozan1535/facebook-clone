import Center from "./components/Home/Center/Center";
import LeftSide from "./components/Home/LeftSide/LeftSide";
import RightSide from "./components/Home/RightSide/RightSide";

export default function Home() {
  return (
    <div className="flex">
      <LeftSide />
      <div className="flex-grow flex">
        <Center />
        <RightSide />
      </div>
    </div>
  );
}
