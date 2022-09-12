import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  alias: yup.string().required(),
});

const Profile = () => {
    
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const fnSend = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(fnSend)}>
        <div>
          <label>Email</label>
          <input type="test" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label>alias</label>
          <input type="test" {...register("alias")} />
          <p>{errors.alias?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Profile;
