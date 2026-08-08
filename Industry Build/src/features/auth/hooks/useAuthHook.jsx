import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const loginUser = async (data) => {
    try {
      const response = await loginApi(data);
      console.log(response)
      dispatch(addUser(response));
      toast.success(`Hi ${response.firstName}`);
      console.log("User signed in")
    } catch(error) {
      console.log("Error in authHook : ", error);
    }
  };
  const registerUser = (data) => {
    console.log(data);
  };

  return {
    register,
    reset,
    handleSubmit,
    errors,
    navigate,
    loginUser,
    registerUser,
  };
};
