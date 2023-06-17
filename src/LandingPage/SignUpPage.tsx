function SignUpPage() {
  return (
    <div
      className="bg-white flex items-center justify-center w-5/12 lg:w-full 
      min-h-screen center p-3  z-20
      shadow-[0px_8px_22px_-6px_rgba(24, 39, 75, 0.12)]
      shadow-[0px_14px_64px_-4px_rgba(24,_39,_75,_0.12)]
    "
    >
      <div className="flex-col">
        <h3 className="font-medium text-4xl text-[#B0B1B3] mb-8">
          Sign up for <br /> exclusive access.
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open("https://app.loch.one/welcome", "target_blank");
          }}
        >
          <input
            className="border border-[#E5E5E6] rounded-lg w-full py-5 px-6 text-gray-700 
        placeholder:text-[#CACBCC] placeholder:font-medium placeholder:text-md
        hover:outline hover:outline-slate-400 focus:outline-slate-400
        shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),0px_1px_1px_rgba(0,_0,_0,_0.04)]
        "
            id="username"
            type="email"
            required
            placeholder="Your email address"
          ></input>
          <button
            type="submit"
            className="mt-6 rounded-lg bg-[#19191A] w-full text-white p-5
        font-semibold"
          >
            Get Started
          </button>
        </form>

        <p className="mt-11 font-semibold text-[#19191A]">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
