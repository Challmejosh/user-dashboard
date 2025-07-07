// import { X } from "lucide-react";

import { Info } from "lucide-react";

interface Prop {
  fullName: string;
  select: string;
  birth: string;
  phone: string;
  error: boolean;
  gender: "male" | "female" | null;
  onChange: (
    key: "select" | "phone" | "fullName" | "birth" | "gender",
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}
const StepTwo = ({
  fullName,
  select,
  birth,
  phone,
  onChange,
  gender,
  error,
}: Prop) => {
  const code: number[] = [234, 856, 596];
  return (
    <div className="w-full flex flex-col items-start justify-between gap-6 ">
      {/* full name */}
      <div className="w-full">
        <div className="w-full h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
          <div className="w-full flex flex-col items-start justify-center ">
            <input
              value={fullName}
              placeholder="Full Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("fullName", e)
              }
              title="fullName"
              name="fullName"
              type="text"
              className="w-full bg-transparent py-2 px-3 flex items-center justify-start focus:outline-none  "
            />
          </div>
        </div>
        {error && !fullName.trim() && (
          <p className="text-red-600 text-sm ">Please enter your full name</p>
        )}
        {error && fullName.length < 4 && fullName.trim() && (
          <p className="text-red-600 text-sm ">
            Name must be at least 4 characters
          </p>
        )}
      </div>
      {/* gender */}
      <div className="">
        <div className=" text-[#1A0710D9] flex gap-2 items-center justify-start ">
          <p className="">Gender</p>
          <div className="flex gap-2 ">
            <input
              value="male"
              checked={gender === "male"}
              onChange={(e) => onChange("gender", e)}
              type="radio"
              name="gender"
              id="male"
              className=""
            />
            <label htmlFor="male" className="font-medium">
              Male
            </label>
            <input
              value="female"
              checked={gender === "female"}
              onChange={(e) => onChange("gender", e)}
              type="radio"
              name="gender"
              id="female"
              className=""
            />
            <label htmlFor="female" className="font-medium">
              Female
            </label>
          </div>
        </div>
        {error && !gender?.trim() && (
          <p className="text-red-600 text-sm ">Select gender</p>
        )}
      </div>
      {/* info */}
      <div className="text-[#1A0710D9] text-sm font-medium w-full flex items-center justify-start gap-1 ">
        <Info size={14} />
        <p className="">The number and birthday are only visible to you</p>
      </div>
      {/* phone number */}
      <div className="w-full">
        <div className="w-full flex items-center justify-center gap-3 ">
          {/* country code */}
          <div className="w-[102px] h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-start">
            <label htmlFor="code">+</label>
            <select
              value={select}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange("select", e)
              }
              name="code"
              id="code"
              className="focus:outline-none p-2 cursor-pointer "
            >
              {code?.map((item, index: number) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* phone input */}
          <div className="w-full border h-[56px] border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
            <div className="w-full flex flex-col items-start justify-center ">
              <input
                value={phone}
                placeholder="Phone number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange("phone", e)
                }
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const input = e.currentTarget;
                  input.value = input.value.replace(/[^0-9]/g, "");
                }}
                title="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                className="w-full bg-transparent py-2 px-3 flex items-center justify-start focus:outline-none  "
              />
            </div>
          </div>
        </div>
        {error && !phone.trim() && (
          <p className="text-red-600 text-sm ">
            Please enter your phone number
          </p>
        )}
      </div>
      {/* birthday */}
      <div className="w-full flex flex-col items-start justify-center ">
        <div className="w-full border h-[56px] border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
          <div className="w-full flex-1 flex flex-col items-start justify-center ">
            <input
              value={birth}
              placeholder="Birthday"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("birth", e)
              }
              id="birth"
              name="birth"
              type="date"
              className="w-full bg-transparent py-2 px-3 flex items-center justify-start focus:outline-none  "
            />
          </div>
          <label htmlFor="birth" className="text-[#1A0710D9] text-sm ">optional</label>
        </div>
        <p className="text-[#1A0710A6] text-sm ">
          Let us know about your birthday so as not to miss a gift
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
