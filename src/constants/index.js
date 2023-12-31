export const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export class Tokens {
  static ACCESS = "accessToken";
  static REFRESH = "refreshToken";
}

export class Modal {
  static SETTINGS = "settings";
  static POPUP = "popup";
  static CREATE_SERVER = "create-server";
  static PROFILE = "profile";
}

export class Themes {
  static LIGHT = "light";
  static DARK = "dark";
}

export class Status {
  static ONLINE = "online";
  static OFFLINE = "offline";
  static IDLE = "idle";
  static INVISIBLE = "invisible";
}

export class PopUpPositions {
  static USER_LIST = "user-list";
  static CHAT = "chat";
  static SIDEBAR = "sidebar";
}

export class Page {
  static LOGIN = "login";
  static HOME = "home";
  static DIRECT = "direct";
  static SERVER = "server";
  static CALL = "call";
  static FRIENDS = "friends";
  static EXPLORE = "explore";
  static SEARCH = "search";
}

export class FriendStatus {
  static ONLINE = "online";
  static OFFLINE = "offline";
  static BLOCKED = "blocked";
  static PENDING = "pending";
}

export class Tab {
  static ALL = "all";
  static ONLINE = "online";
  static PENDING = "pending";
  static BLOCKED = "blocked";
  static ADD_FRIEND = "add friend";
}

export class ChannelType {
  static TEXT = "text";
  static VOICE = "voice";
}

export class IndicatorState {
  static ACTIVE = "active";
  static NOTIFICATION = "notification";
  static HIDDEN = "hidden";
  static HOVER = "hover";
}
