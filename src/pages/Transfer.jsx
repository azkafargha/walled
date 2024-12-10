function Transfer() {
  return (
    <section className="flex flex-col justify-center items-center mt-12">
      <div className="text-black font-bold text-xl">Transfer</div>
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
        <div className="rounded-6xl w-[300px] h-[400px]">
          <div className="m-5 rounded-xl bg-[#FAFBFD] h-[39px] shadow-lg">
            <div className="flex align-left items-center justify-center rounded-xl bg-[#efefef] w-[60px] h-[39px]">
              <p className="text-black">To</p>
            </div>
          </div>
          <form className="max-w-sm mx-auto">
            <div className="m-5">
              <label className="text-black block mb-2 text-sm font-medium">
                Amount
              </label>
              <input
                type="text"
                id="large-input"
                className="block w-full p-4 shadow-lg rounded-lg bg-white text-black"
                />
            </div>
            <div className="m-5">
              <label className="text-black block mb-2 text-sm font-medium">
                Notes
              </label>
              <input
                type="text"
                id="large-input"
                className="block w-full h-[100px] p-4 shadow-lg rounded-lg bg-white text-black"
                />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Transfer;
