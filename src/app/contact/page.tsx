"use client";
// icons
import { BsArrowRight } from "react-icons/bs";
// framer
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/constants/variants";
import AnimationWrapper from "@/components/AnimationWrapper";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function Page() {
  const { register, handleSubmit, reset } = useForm({ defaultValues });
  async function asyncSubmitForm(data: FormValues) {
    console.log("data", data);
    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert("Message sent successfully!");
        reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  return (
    <AnimationWrapper>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              {"Let's "}
              <span className="text-accent">connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit(asyncSubmitForm)}
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="name"
                  className="input"
                  {...register("name")}
                />
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  {...register("email")}
                />
              </div>
              <input
                type="text"
                placeholder="subject"
                className="input"
                {...register("subject")}
              />
              <textarea
                placeholder="message"
                className="textarea"
                {...register("message")}
              ></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden self-center hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {"Let's talk"}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
}
