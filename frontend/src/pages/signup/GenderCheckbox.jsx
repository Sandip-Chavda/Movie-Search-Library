const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label
          className={`label flex items-center gap-1 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="text-base label-text text-gray-200">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label flex gap-1 items-center cursor-pointer  ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="text-base label-text text-gray-200">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
