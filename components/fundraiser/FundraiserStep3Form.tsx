import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const FundraiserStep3Form = () => {
  const { register, formState } = useFormContext();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label className="block text-sm font-medium mb-2">Start Date</label>
        <Input {...register("startDate")} type="date" className="w-full" />
        {formState.errors.startDate?.message &&
        typeof formState.errors.startDate.message === "string" ? (
          <p className="text-xs text-red mt-1">
            {formState.errors.startDate.message?.toString()}
          </p>
        ) : (
          <p className="text-xs text-gray-500 mt-1">
            Select the starting date for your fundraiser
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">End Date</label>
        <Input {...register("endDate")} type="date" className="w-full" />
        {formState.errors.endDate?.message &&
        typeof formState.errors.endDate.message === "string" ? (
          <p className="text-xs text-red mt-1">
            {formState.errors.endDate.message?.toString()}
          </p>
        ) : (
          <p className="text-xs text-gray-500 mt-1">
            Select the ending date for your fundraiser
          </p>
        )}
      </div>
    </div>
  );
};

export default FundraiserStep3Form;
