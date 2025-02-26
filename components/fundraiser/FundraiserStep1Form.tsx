"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { StaticImagePicker } from "@/components/fundraiser/StaticImagePicker";
import clsx from "clsx";

const FundraiserStep1Form = () => {
  const { register, formState, setValue, getValues } = useFormContext();
  const [tempImageId, setTempImageId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImage = (imageValue: number | null) => {
    setTempImageId(imageValue);
    setValue("imageIndex", imageValue, { shouldValidate: true });

    if (tempImageId !== null) {
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    const storedImageId = getValues("imageIndex");

    if (storedImageId !== undefined && storedImageId !== null) {
      setTempImageId(storedImageId);
    }
  }, [getValues]);

  return (
    <div
      className={clsx(
        "flex flex-row flex-wrap w-full max-w-[40rem]",
        "items-start shadow-lg",
        "border border-solid rounded-md",
      )}
    >
      <div className="flex flex-1 flex-col p-4 gap-4 min-w-64">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-secondary mb-1">
            Fundraiser Name
          </label>
          <Input
            {...register("title")}
            placeholder="Fundraiser Name"
            className="w-full"
          />
          {formState.errors.title?.message &&
          typeof formState.errors.title.message === "string" ? (
            <p className="text-xs text-red mt-1">
              {formState.errors.title.message?.toString()}
            </p>
          ) : (
            <p className="text-xs text-gray-500 mt-1">
              Give your fundraiser a short and clean name
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-secondary mb-1">
            Fundraiser Description
          </label>
          <Textarea
            {...register("description")}
            placeholder="Fundraiser Description"
            className="w-full resize-none"
          />
          {formState.errors.description?.message &&
          typeof formState.errors.description.message === "string" ? (
            <p className="text-xs text-red mt-1">
              {formState.errors.description.message?.toString()}
            </p>
          ) : (
            <p className="text-xs text-gray-500 mt-1">
              Describe the purpose of the fundraiser and its impact
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 gap-4 min-w-64">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-secondary mb-1">
            Fundraiser Goal
          </label>
          <Input
            {...register("goalAmount", { valueAsNumber: true })}
            placeholder="Fundraiser Goal"
            className="w-full"
          />
          {formState.errors.goalAmount?.message &&
          typeof formState.errors.goalAmount.message === "string" ? (
            <p className="text-xs text-red mt-1">
              {formState.errors.goalAmount.message?.toString()}
            </p>
          ) : (
            <p className="text-xs text-gray-500 mt-1">
              Set a clear and achievable goal
            </p>
          )}
        </div>

        <div className="flex flex-col justify-end items-center">
          <div className="flex-1 w-full">
            <StaticImagePicker
              imageIndex={getValues("imageIndex")}
              onChange={handleImage}
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiserStep1Form;
