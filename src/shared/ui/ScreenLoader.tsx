import Loader from "./core/loader/Loader";

function ScreenLoader() {
  return (
    <div className="w-full h-screen grid place-items-center bg-white">
      <Loader />
    </div>
  );
}

export default ScreenLoader;
