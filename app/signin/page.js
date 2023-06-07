import Button from "@/components/Button";
import Input from "@/components/Input";

function page() {
  const renderEmailAndPasswordIp = () => (
    <div className="bg-white p-[30px] rounded-[10px] flex flex-col gap-5 mb-5 mt-6">
      <Input
        labelText="Email address"
        labelClassName="text-black text-base mb-[10px]"
        placeholder="Enter your email address"
        className="text-black bg-emailPlaceholder"
        type="email"
        wrapperClassName="bg-emailPlaceholder py-3"
      />
      <Input
        labelText="Password"
        labelClassName="text-black text-base mb-[10px]"
        placeholder="Enter your password"
        className="text-black bg-emailPlaceholder"
        type="password"
        wrapperClassName="bg-emailPlaceholder"
      />
      <p className="text-linkText text-base">Forgot password?</p>
      <Button
        title="Sign In"
        className="bg-black py-[9px] rounded-[10px] text-white font-bold text-base justify-center w-full"
      />
    </div>
  );

  const renderRightSidePart = () => (
    <div>
      <p className="font-bold text-black text-4xl">Sign In</p>
      <p className="text-black text-base mt-1 mb-7">Sign in to your account</p>
        <div className="flex items-center gap-6">
          <Button
            className="gap-2 bg-white px-5 py-2 text-xs text-subTitle rounded-[10px]"
            title="Sign in with Google"
            imageIcon="google-logo.svg"
          />
          <Button
            className="gap-2 bg-white px-5 py-2 text-xs text-subTitle rounded-[10px]"
            title="Sign in with Apple"
            imageIcon="apple-logo.svg"
          />
        </div>
        {renderEmailAndPasswordIp()}
        <p className="text-base text-subTitle text-center">
          Don’t have an account?{" "}
          <span className="text-linkText"> Register here</span>
        </p>
    </div>
  );
  return (
    <div className="h-screen w-full flex">
      <div className="flex items-center justify-center w-5/12 bg-black">
        <p className="font-bold text-white text-7xl">Board.</p>
      </div>
      <div className="flex-1 flex items-center justify-center bg-backgroundColor">
        {renderRightSidePart()}
      </div>
    </div>
  );
}

export default page;
