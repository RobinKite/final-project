import { TextareaAutosize } from "@mui/base";
import { useEffect, useRef } from "react";
// import { BiSolidPlusCircle } from "react-icons/bi";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import PropTypes from "prop-types";
import { Stack, useTheme } from "@mui/material";

export function Input({ submitCallback }) {
  const theme = useTheme();
  const textareaRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.code !== "Enter" || event.shiftKey) return;

    const trimmedText = textareaRef.current.value.trim();
    if (trimmedText) {
      submitCallback(textareaRef.current.value);
      textareaRef.current.value = "";
    }
    event.preventDefault();
  };

  useEffect(() => {
    const observer = new ResizeObserver(() =>
      dispatchEvent(new Event("resize"))
    );
    observer.observe(textareaRef.current);
  }, []);

  return (
    <Stack sx={{ px: 4, pb: 5 }}>
      <form className="flex rounded-lg bg-[#383A3F] text-gray-300">
        <AddCircleIcon
          sx={{
            mx: "16px",
            my: "10px",
            width: "20px",
            height: "20px",
            color: theme.palette.grey["10"],
          }}
        />
        <TextareaAutosize
          className="w-full resize-none bg-transparent py-[10px] pr-3 text-[0.9rem] placeholder:text-gray-500 focus:outline-none"
          placeholder="Message"
          maxRows={16}
          onKeyDown={handleKeyDown}
          ref={textareaRef}
        />
      </form>
    </Stack>
  );
}

Input.propTypes = {
  submitCallback: PropTypes.func.isRequired,
};

{
  /* <div className="px-4 pb-6">
  <form className="flex rounded-lg bg-[#383A3F] text-gray-300">
    <BiSolidPlusCircle className="mx-4 my-3 text-[#b5bac1]" size={24} />
    <TextareaAutosize
      className="w-full resize-none bg-transparent py-3 pr-3 text-[0.9rem] placeholder:text-gray-500 focus:outline-none"
      placeholder="Message"
      maxRows={16}
      onKeyDown={handleKeyDown}
      ref={textareaRef}
    />
  </form>
</div>; */
}
