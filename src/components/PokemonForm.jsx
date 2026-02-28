import { useForm, Watch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import postData from "../services/post.js";

function PokemonForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      img: "",
      type: "",
    },
    mode: "onBlur", //validate on blur
    reValidateMode: "onChange", //revalidate on every change after blur
  });

  const { name, type, img } = watch();

  const submitHandler = async (formData) => {
    await postData(formData);
    reset();
  };

  return (
    <>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <div className="flex flex-wrap gap-10 justify-center w-full">

          <div className="flex flex-col grow min-w-50 max-w-md">
            <label className="block text-center mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="border rounded border-gray-300 w-full h-10 p-2"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 10, message: "Name is too long" },
              })}
            />
            <div className="error text-center mt-1">{errors.name?.message}</div>
          </div>

          <div className="flex flex-col grow min-w-50 max-w-md">
            <label className="block text-center mb-2" htmlFor="type">
              Type:
            </label>
            <input
              type="text"
              id="type"
              className="border rounded border-gray-300 w-full h-10 p-2"
              {...register("type", {
                required: "Type is required",
                maxLength: { value: 50, message: "Type is too long" },
              })}
            />
            <div className="error text-center mt-1">{errors.type?.message}</div>
          </div>

          <div className="flex flex-col grow min-w-50 max-w-md">
            <label className="block text-center mb-2" htmlFor="img">
              Image URL:
            </label>
            <input
              type="text"
              id="img"
              className="border rounded border-gray-300 w-full h-10 p-2"
              {...register("img", {
                required: "Image URL is required",
                pattern: {
                  value: /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i,
                  message: "Invalid image URL",
                },
              })}
            />
            <div className="error text-center mt-1">{errors.img?.message}</div>
          </div>
        </div>

        <input
          className="button bg-gray-200 p-2 text-black h-10 w-40 self-center mt-4"
          type="submit"
          value="Submit"
        />
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
      <div className="border p-4 my-4 flex flex-col items-center">
        {name && <p className="text-center">Name: {name}</p>}
        {img && (
          <img
            src={img}
            alt="Pokemon"
            className="w-full h-40 object-contain my-2"
          />
        )}
        {type && <p className="text-center">Type: {type}</p>}
      </div>
    </>
  );
}

export default PokemonForm;
