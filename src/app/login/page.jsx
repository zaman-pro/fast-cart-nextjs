import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
