const PrivateList = () => {
  const list = false;

  return (
    <div className="private-list glassmorph mx-auto min-h-screen mt-3 h-full text-white py-4 px-8 flex flex-col mb-5">
      <h1 className="text-center text-3xl font-bold mb-3">
        <span className="text-[#12d0a1]">Private</span> Movie List
      </h1>
      <div className="flex flex-col">
        {list ? (
          <div>Your lisst</div>
        ) : (
          <div>
            <div className="flex mt-16  items-center justify-center">
              <img className="w-[450px]" src="./empty.svg" alt="emptymovie" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateList;
