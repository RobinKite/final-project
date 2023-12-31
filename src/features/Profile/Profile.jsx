import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { setProfile } from "@/redux/slices/profileSlice";
import { closeModal } from "@/redux/slices/uiSlice";
import { Modal } from "@/constants";
import { ProfileTabBar } from "./ProfileTabBar";
import { ProfileBanner } from "./ProfileBanner";
import { ProfileTabsContent } from "./ProfileTabsContent";
import { useRef, useState } from "react";
import { ProfileActions } from "./ProfileActions";
import { profileTabs } from "@/constants/profileTabs";

export const Profile = () => {
  const backdropRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.userProfile);

  const [activeTabId, setActiveTabId] = useState(profileTabs[0].id);

  const handleTabClick = (id) => {
    setActiveTabId(id);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id !== "backdrop") return;

    dispatch(setProfile(null));
    dispatch(closeModal(Modal.PROFILE));
  };

  return (
    <Stack
      id="backdrop"
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 11,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000dd",
        color: "#fff",
      }}
      onClick={handleBackdropClick}
    >
      <Stack
        ref={backdropRef}
        sx={(theme) => ({
          position: "relative",
          top: "50%",
          left: "50%",
          width: "600px",
          transform: "translate(-50%, -50%)",
          maxHeight: "609px",
          borderRadius: "8px",
          backgroundColor: theme.palette.darkBg,
          overflow: "hidden",
        })}
      >
        <ProfileBanner
          wrapperSX={{ width: "600px", height: "106px" }}
          imageSX={{
            border: "6px solid #232328",
            width: "134px",
            height: "134px",
            top: "32px",
            left: "16px",
          }}
          statusSX={{ top: "126px", left: "115px" }}
        />
        <ProfileActions />
        <Stack
          sx={{ padding: "78px 16px 16px", width: "100%", height: "auto" }}
        >
          <Stack
            sx={(theme) => ({
              p: "12px",
              bgcolor: theme.palette.darkTooltip,
              borderRadius: "8px",
            })}
          >
            <Typography
              component="h3"
              sx={{ fontSize: "20px", lineHeight: "1.2" }}
            >
              {user.name}
            </Typography>
            <Typography sx={{ fontSize: "14px", lineHeight: "1.7" }}>
              {user.userName}
            </Typography>

            <ProfileTabBar
              activeTabId={activeTabId}
              handleTabClick={handleTabClick}
              tabs={profileTabs}
            />
            <ProfileTabsContent user={user} activeTabId={activeTabId} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
