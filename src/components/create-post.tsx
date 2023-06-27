import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { api } from "~/utils/api";
import Button from "./ui/button";

const CreatePost = () => {
  const [input, setInput] = useState("");

  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.posts.getAll.invalidate();
    },
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ content: input });
  };

  return (
    <form
      className="mb-4 flex items-center justify-between gap-6 px-6 py-4"
      onSubmit={handleSubmit}
    >
      <div className="grow rounded-md border-2 border-slate-400 focus-within:border-slate-200">
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Type some emojis!"
          className="h-full w-full border-none bg-transparent px-4 py-2 outline-none"
          disabled={isPosting}
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default CreatePost;
