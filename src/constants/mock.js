import { getRandomColor } from "@/utils";
import icon from "@/assets/amongus.png";
import { Status } from ".";
import { FriendStatus } from "@/constants";

export const SAMPLE_CHANNELS = [
  { id: "1", name: "general", type: "text" },
  { id: "2", name: "voice", type: "voice" },
  { id: "3", name: "random", type: "text" },
  { id: "4", name: "music", type: "voice" },
];

const SAMPLE_SERVER_TITLE = "default";

export const SAMPLE_USERS = [
  {
    userId: "1",
    name: "Eric",
    userName: "eric54",
    userRegistrationDate: "07.07.2018",
    avatar: icon,
    role: "role-1",
    note: "",
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.ONLINE,
  },
  {
    userId: "2",
    name: "Stan",
    userName: "stan854",
    userRegistrationDate: "07.07.2017",
    avatar: null,
    role: "role-1",
    status: Status.IDLE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.ONLINE,
  },
  {
    userId: "3",
    name: "Wendy",
    userName: "wendy033",
    userRegistrationDate: "07.10.2020",
    avatar: null,
    role: "role-2",
    status: Status.INVISIBLE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.OFFLINE,
  },
  {
    userId: "4",
    name: "Kenny",
    userName: "007kenny",
    userRegistrationDate: "07.27.2021",
    avatar: null,
    role: "role-2",
    status: Status.INVISIBLE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.BLOCKED,
  },
  {
    userId: "5",
    name: "Kyle",
    userName: "ekyle54",
    userRegistrationDate: "07.03.2022",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.OFFLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.PENDING,
  },
  {
    userId: "6",
    name: "Chef",
    userName: "chef80",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.BLOCKED,
  },
];
export const SAMPLE_MESSAGES = [
  {
    ...SAMPLE_USERS[0],
    messageID: 1,
    timestamp: 1694970000000,
    text: "Hey :)",
  },
  {
    ...SAMPLE_USERS[1],
    messageID: 2,
    timestamp: 1694970600000,
    text: "Hello.",
  },
  {
    ...SAMPLE_USERS[2],
    messageID: 3,
    timestamp: 1694970700000,
    text: "hi",
  },
  {
    ...SAMPLE_USERS[3],
    messageID: 4,
    timestamp: 1694970800000,
    text: "Howdy",
  },
  {
    ...SAMPLE_USERS[4],
    messageID: 5,
    timestamp: 1694970900000,
    text: "What's up?",
  },
  {
    ...SAMPLE_USERS[5],
    messageID: 6,
    timestamp: 1694971000000,
    text: "Salutations!",
  },
];

export const SAMPLE_SERVER = {
  id: "1",
  title: SAMPLE_SERVER_TITLE,
  channels: SAMPLE_CHANNELS,
  users: SAMPLE_USERS,
};
