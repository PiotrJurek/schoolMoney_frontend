"use client";

import { axiosInstance } from "@/app/api";
import axios, {AxiosError} from "axios";
import {LoginFormValues} from "@/app/login/loginValidationRules";

export const postLogin = async (data: LoginFormValues) => {
    try {
        const response = await axiosInstance.post("/Auth/Login", data);
        return {success: true, data: response.data};
      } catch (error: AxiosError | any) {
        if (axios.isCancel(error)) {
            return { success: false, error: "Request was canceled." }
        }
        const errorMessage = error.response
            ? `HTTP error! Status: ${error.response.status} - ${error.response.statusText}`
            : "Failed to generate additional exercise.";

        return { success: false, error: errorMessage };
    }
}
