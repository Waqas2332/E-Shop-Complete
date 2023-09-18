"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signin } from "@/redux/actions/auth";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const message = useAppSelector((state) => state.auth.message);
  const success = useAppSelector((state) => state.auth.success);
  const error = useAppSelector((state) => state.auth.error);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (success) {
      toast.success(message);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, success]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [dispatch, error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signin(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 btn">
              {isLoading ? <Spinner /> : "Login"}
            </button>
          </div>
          <div className="text-center mt-4">
            <p>
              Dont Have an Account ? <br />
              <span>
                <Link className="text-[#1d4946]" href="/signup">
                  Create New Account
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
