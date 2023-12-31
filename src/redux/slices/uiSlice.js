import { createSlice } from "@reduxjs/toolkit";
import { Tab } from "@/constants";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalStack: [],
    isLoading: false,
    isUserListShown: false,
    isStreamingChatShown: false,
    isFullScreen: false,
    popupContent: {},
    popupPosition: [],
    currentPage: null,
    friendsTab: Tab.ONLINE,
    nextPagePathname: null,
  },
  reducers: {
    setPopUpPosition: (state, action) => {
      state.popupPosition = action.payload;
    },
    setNextPagePathname: (state, action) => {
      state.nextPagePathname = action.payload;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    openModal: (state, action) => {
      state.modalStack.push(action.payload);
    },
    closeModal: (state) => {
      state.modalStack.pop();
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    toggleUserList: (state) => {
      state.isUserListShown = !state.isUserListShown;
    },
    fillPopupContent: (state, action) => {
      state.popupContent = action.payload;
    },
    setFriendsTab: (state, action) => {
      state.friendsTab = action.payload;
    },
    toggleStreamingChatShown: (state) => {
      state.isStreamingChatShown = !state.isStreamingChatShown;
    },
    toggleFullScreen: (state) => {
      state.isFullScreen = !state.isFullScreen;
    },
  },
});

export const {
  openModal,
  closeModal,
  startLoading,
  stopLoading,
  fillPopupContent,
  setPopUpPosition,
  toggleUserList,
  toggleStreamingChatShown,
  toggleFullScreen,
  updateCurrentPage,
  setFriendsTab,
  setNextPagePathname,
} = uiSlice.actions;

export default uiSlice.reducer;
