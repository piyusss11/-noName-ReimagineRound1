const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2  text-lg px-12">
      <img
        className="w-20"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"
        alt=""
      />
      <div className="flex gap-8 font-semibold">
        <h1>Home</h1>
        <h1>Men</h1>
        <h1>Women</h1>
        <h1>Kids</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-4 ">
          <div className="flex items-center">
            <i className="text-black hover:opacity-40 cursor-pointer px-4 border-l-0  rounded-full rounded-r-none   ri-search-line"></i>
            <input
              className="px-4 bg-[#E5E5E5] rounded-full rounded-l-none outline-none text-base  border-r-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <i className="ri-heart-line"></i>
        <i className="ri-shopping-cart-line"></i>
      </div>
    </div>
  );
};

export default Navbar;
