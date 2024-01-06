const Header = () => {

    return (
        <header class=" h-[6rem] w-full mr-0 bg-[#F08080]">
          <div className=" justify-between flex p-4 ">
          <div className=" mt-5 font-extrabold text-2xl  font-sans text-[#FFDAB9]">
            Task Manager
          </div>
          <div  className="flex space-x-9  mr-9 text-xl  font-sans text-[#FFDAB9]">
            <h1 className=" mt-2 hover:text-[#F8AD9D]" >Login</h1>
            <h1 className=" hover:bg-[#FFDAB9] hover:text-[#D45E5E]  h-[3rem] w-[5rem] text-center  p-2 rounded-full bg-[#F4978E]">Signup</h1>
          </div>

          </div>
        </header>
    )
}

export default Header;