// import { useField } from "formik";
// import { CountryDropdown } from "react-country-region-selector";

// const CountrySelect = ({
//   label,
//   width = "w-full",
//   height = "h-[44px]",
//   borderColor = "border-grey-light",
//   marginBottom = "mb-[20px]",
//   ...props
// }) => {
//   const [field, meta, helpers] = useField(props);

//   return (
//     <div className={`flex w-full flex-col justify-start ${marginBottom}`}>
//       {label && (
//         <label
//           htmlFor={field.name}
//           className="mb-[2px] text-[14px] font-semibold text-[#7D8592]"
//         >
//           {label}
//         </label>
//       )}
//       <CountryDropdown
//         defaultOptionLabel="Select Country"
//         value={field.value}
//         className={`rounded-[14px] border p-2 ${borderColor} ${height} ${width}`}
//         onBlur={() => {
//           helpers.setTouched(true);
//         }}
//         onChange={(val) => {
//           helpers.setValue(val);
//         }}
//       />
//       {meta.error && meta.touched && (
//         <span className="text-[14px] text-accent">{meta.error}</span>
//       )}
//     </div>
//   );
// };

// export default CountrySelect;