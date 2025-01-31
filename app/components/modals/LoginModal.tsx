"use client";

import { signIn } from "next-auth/react";
import axios from "axios";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const router = useRouter();

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((cb) => {
            setIsLoading(false);

            if (cb?.ok) {
                toast.success("Successfully logged in");
                router.refresh();
                loginModal.onClose();
            }

            if (cb?.error) {
                toast.error(cb.error);
            }
        });
    };

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back" subtitle="Login to your account" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <div className="flex flex-row items-center gap-3">
                <div className="w-full h-[1px] bg-neutral-200" />
                {/* <div className="text-xs font-semibold text-neutral-500">or</div> */}
                <div className="w-full h-[1px] bg-neutral-200" />
            </div>
            {/* <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn("github")}
            /> */}
            {/* <Button 
                outline
                label="Continue with Facebook"
                icon={AiFillFacebook}
                onClick={() => signIn('facebook')}
            /> */}
            <div className="mt-4 font-light text-center text-neutral-500">
                <div className="flex flex-row items-center justify-center gap-2">
                    <div>First time using Byahe.net?</div>
                    <div
                        onClick={toggle}
                        className="cursor-pointer text-neutral-800 hover:underline"
                    >
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModal;
