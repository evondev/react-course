import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
// using react-hook-form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
  } = useForm({
    // resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  console.log("SignUpFormHook ~ dirtyFields", dirtyFields);
  // console.log("SignUpFormHook ~ isSubmitting", isSubmitting);
  // console.log("SignUpFormHook ~ errors", errors);
  // console.log("SignUpFormHook ~ formState", formState);
  // errors = formState.errors; {}
  // console.log("SignUpFormHook ~ isDirty", isDirty);
  // console.log("SignUpFormHook ~ isValid", isValid);
  const watchShowAge = watch("showAge", false);
  console.log("SignUpFormHook ~ watchShowAge", watchShowAge);
  const onSubmit = async (values) => {
    console.log("onSubmit ~ values", values);
    if (isValid) {
      console.log("send data to backend");
      // after successfuly submitted
      // then reset form
      reset({
        firstName: "evondev",
        lastName: "tuan",
        email: "tuan@gmail.com",
      });
    }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "evondev", {});
    setValue("lastName", "tuan");
    setValue("email", "tuan@gmail.com");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            name=""
            id=""
            placeholder="Please enter your age"
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          className="p-3 bg-green-400 text-white"
          onClick={handleSetDemoData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  console.log("MyInput ~ field", field);
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
