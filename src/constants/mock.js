import { getRandomColor } from "@/utils";
import icon from "@/assets/amongus.png";
import { Status } from ".";
import { FriendStatus } from "@/constants";
import appex from "@/assets/cardBanners/apex.jpeg";
import deeprock from "@/assets/cardBanners/deeprock.jpeg";
import destiny from "@/assets/cardBanners/destiny.jpeg";
import townhall from "@/assets/cardBanners/discord_townhall.jpeg";
import fortnite from "@/assets/cardBanners/fortnite.jpeg";
import genshin from "@/assets/cardBanners/genshin.jpeg";
import midJourney from "@/assets/cardBanners/midJourney.jpeg";
import minecraft from "@/assets/cardBanners/minecraft.jpeg";
import roblox from "@/assets/cardBanners/roblox.jpeg";
import starrail from "@/assets/cardBanners/starrail.jpeg";
import valorant from "@/assets/cardBanners/valorant.jpeg";
import terraria from "@/assets/cardBanners/terraria.jpeg";
import apexIcon from "@/assets/cardIcons/apex-icon.webp";
import destinyIcon from "@/assets/cardIcons/destiny-icon.webp";
import drgIcon from "@/assets/cardIcons/drg-icon.webp";
import fortniteIcon from "@/assets/cardIcons/fortnite-icon.webp";
import genshinIcon from "@/assets/cardIcons/genshin-icon.webp";
import honkaiIcon from "@/assets/cardIcons/honkai-icon.webp";
import minecraftIcon from "@/assets/cardIcons/minecraft-icon.webp";
import robloxIcon from "@/assets/cardIcons/roblox-icon.webp";
import shipIcon from "@/assets/cardIcons/ship.webp";
import terrariaIcon from "@/assets/cardIcons/terraria-icon.webp";
import townhallIcon from "@/assets/cardIcons/townhall-icon.webp";
import valorantIcon from "@/assets/cardIcons/valorant-icon.webp";

export const SAMPLE_CHANNELS = [
  { id: "1", title: "general", type: "text" },
  { id: "2", title: "voice", type: "voice" },
  { id: "3", title: "random", type: "text" },
  { id: "4", title: "music", type: "voice" },
];

const SAMPLE_SERVER_TITLE = "default";

export const SAMPLE_FRIENDS = [
  {
    userId: "1",
    name: "Eric",
    userName: "eric54",
    userRegistrationDate: "07.07.2018",
    role: "role-1",
    note: "",
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    bannerColor: "gold",
  },

  {
    userId: "3",
    name: "Wendy",
    userName: "wendy033",
    userRegistrationDate: "07.10.2020",
    avatar: null,
    role: "role-2",
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: "blue",
  },
];

export const SAMPLE_CARDS = [
  {
    serverId: "1",
    banner: midJourney,
    icon: shipIcon,
    title: "Midjourney",
    description:
      "The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
    isPublic: true,
    onlineUsers: 187,
    members: 455,
  },
  {
    serverId: "2",
    banner: genshin,
    icon: genshinIcon,
    title: "Genshin Impact official",
    description:
      "Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!",
    isPublic: true,
    onlineUsers: 98,
    members: 398,
  },
  {
    serverId: "3",
    banner: starrail,
    icon: honkaiIcon,
    title: "Honkai: Rail Official",
    description: "Honkai: Star Rail is a new HoYoverse space fantasy RPG.",
    isPublic: true,
    onlineUsers: 277,
    members: 568,
  },
  {
    serverId: "4",
    banner: minecraft,
    icon: minecraftIcon,
    title: "Minecraft",
    description: "The official Minecraft Discord!",
    isPublic: true,
    onlineUsers: 453,
    members: 984,
  },
  {
    serverId: "5",
    banner: valorant,
    icon: valorantIcon,
    title: "VALORANT",
    description:
      "The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!",
    isPublic: true,
    onlineUsers: 305,
    members: 800,
  },
  {
    serverId: "6",
    banner: fortnite,
    icon: fortniteIcon,
    status: "verified",
    title: "Official Fortnite",
    description:
      "The Official Fortnite Discord Server! Join to follow news channels, LFG, and chat.",
    isPublic: true,
    onlineUsers: 400,
    members: 987,
  },
  {
    serverId: "7",
    banner: deeprock,
    icon: drgIcon,
    status: "verified",
    title: "Deep Rock Galactic",
    description:
      "Official Discord Server for Deep Rock Galactic - a game about dwarven team spirit, mining and shooting aliens.",
    isPublic: true,
    onlineUsers: 145,
    members: 294,
  },
  {
    serverId: "8",
    banner: roblox,
    icon: robloxIcon,
    status: "verified",
    title: "Roblox",
    description:
      "The largest community-run Roblox server. Join for news, chat, LFG, events & more! For both Users and Creators. 🌈 🌻",
    isPublic: true,
    onlineUsers: 345,
    members: 567,
  },
  {
    serverId: "9",
    banner: townhall,
    icon: townhallIcon,
    status: "verified",
    title: "Discord Town Hall",
    description:
      "Welcome to Discord Town Hall—a community run by Discord, for Discord users! Join for the latest product news & events.",
    isPublic: true,
    onlineUsers: 98,
    members: 367,
  },
  {
    serverId: "10",
    banner: appex,
    icon: apexIcon,
    status: "verified",
    title: "Apex Legends",
    description:
      "Community run, developer supported Discord server dedicated to Apex Legends. Join for LFG, Game Discussion, News & more!",
    isPublic: true,
    onlineUsers: 503,
    members: 1200,
  },
  {
    serverId: "11",
    banner: destiny,
    icon: destinyIcon,
    status: "verified",
    title: "Destiny 2 LFG",
    description: "Destiny 2 LFG Server For All Platforms",
    isPublic: true,
    onlineUsers: 800,
    members: 1000,
  },
  {
    serverId: "12",
    banner: terraria,
    icon: terrariaIcon,
    status: "verified",
    title: "Terraria",
    description:
      "Ask questions, join events, win prizes and meet new friends on the official Terraria server; the #1 rated game on Steam!",
    isPublic: true,
    onlineUsers: 169,
    members: 562,
  },
];

export const SAMPLE_USERS = [
  {
    userId: "1",
    name: "Ernest",
    userName: "ernesthemingway",
    userRegistrationDate: "07.07.2018",
    avatar: icon,
    role: "role-1",
    note: "",
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.ONLINE,
    mutualFriends: [
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
      },
    ],
    mutualServers: [
      { title: "First Server" },
      { title: "Second Server" },
      { title: "Third Server" },
    ],
  },
  {
    userId: "2",
    name: "Ian",
    userName: "fleming",
    userRegistrationDate: "07.07.2017",
    avatar: null,
    role: "role-1",
    status: Status.IDLE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    note: "",
    bannerColor: getRandomColor(),
    mutualFriends: [
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
        mutualFriends: [
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
            mutualFriends: [
              {
                userName: "Stan",
                userId: "2",
                role: "role-1",
                status: Status.OFFLINE,
              },
            ],
            mutualServers: [],
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
            mutualFriends: [
              {
                userName: "Stan",
                userId: "2",
                role: "role-1",
                status: Status.OFFLINE,
              },
            ],
            mutualServers: [],
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
            mutualFriends: [
              {
                userName: "Stan",
                userId: "2",
                role: "role-1",
                status: Status.OFFLINE,
              },
            ],
            mutualServers: [],
          },
        ],
        mutualServers: [
          { title: "First Server" },
          { title: "Second Server" },
          { title: "Third Server" },
        ],
      },
    ],
    mutualServers: [],
  },
  {
    userId: "3",
    name: "Charles",
    userName: "dickens1812",
    userRegistrationDate: "07.10.2020",
    avatar: null,
    role: "role-2",
    status: Status.INVISIBLE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    note: "",
    bannerColor: getRandomColor(),
    mutualFriends: [
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
        mutualFriends: [
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
            mutualFriends: [
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
                mutualFriends: [
                  {
                    userName: "Stan",
                    userId: "2",
                    role: "role-1",
                    status: Status.OFFLINE,
                  },
                ],
                mutualServers: [],
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
                mutualFriends: [
                  {
                    userName: "Stan",
                    userId: "2",
                    role: "role-1",
                    status: Status.OFFLINE,
                  },
                ],
                mutualServers: [],
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
              },
            ],
            mutualServers: [
              { title: "First Server" },
              { title: "Second Server" },
              { title: "Third Server" },
            ],
          },
        ],
        mutualServers: [],
      },
    ],
    mutualServers: [],
  },
  {
    userId: "4",
    name: "George",
    userName: "gorwell",
    userRegistrationDate: "07.27.2021",
    avatar: null,
    role: "role-2",
    status: Status.INVISIBLE,
    serverRegistrationDate: "09.09.2023",
    serverName: SAMPLE_SERVER_TITLE,
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.BLOCKED,
    mutualFriends: [
      {
        userName: "Stan",
        userId: "2",
        role: "role-1",
        status: Status.OFFLINE,
      },
    ],
    mutualServers: [],
  },
  {
    userId: "5",
    name: "Edgar",
    userName: "allanpoe",
    userRegistrationDate: "07.03.2022",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.OFFLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.PENDING,
    mutualFriends: [
      {
        userName: "Stan",
        userId: "2",
        role: "role-1",
        status: Status.OFFLINE,
      },
    ],
    mutualServers: [],
  },
  {
    userId: "6",
    name: "Arthur",
    userName: "thesirconandoyle",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "7",
    name: "Jack",
    userName: "jlondon76",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "8",
    name: "Agatha",
    userName: "christie",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "9",
    name: "William",
    userName: "wshakespeare",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "10",
    name: "Francis",
    userName: "fscottfitzgerald",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "11",
    name: "Mark",
    userName: "marktwain",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "12",
    name: "Jerome",
    userName: "jeromeselinger",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "13",
    name: "Heather",
    userName: "heathermorris",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "14",
    name: "Oscar",
    userName: "oscarwilde",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "15",
    name: "Charlotte",
    userName: "charlottebronte",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "16",
    name: "Herper",
    userName: "harperlee",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
  },
  {
    userId: "17",
    name: "Jane",
    userName: "janeeyre",
    userRegistrationDate: "12.17.2019",
    serverName: SAMPLE_SERVER_TITLE,
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    bannerColor: getRandomColor(),
    friendStatus: FriendStatus.BLOCKED,
    mutualFriends: [
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
      },
    ],
    mutualServers: [],
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
  notificationCount: 0,
};
