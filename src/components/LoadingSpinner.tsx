const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-88px)]">
      <p className="text-6xl md:text-7xl font-bold">Welc</p>
      <div className="w-9 h-9 md:w-12 md:h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-red-500"></div>
      {/* <div className="">
        <img src="/glob.png" alt="" className="w-12 h-12 animate-ping mt-5" />
      </div> */}

      <p className="text-6xl md:text-7xl font-bold">me....</p>
    </div>
  );
};

export default LoadingSpinner;
