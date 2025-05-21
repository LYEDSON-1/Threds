import { User, Post } from "./types";

export const dummyUsers: User[] = [
    {
        id: '1',
        username: "johndoe",
        name: "John Doe",
        image: "https://i.pravatar.cc/150?img=1",
        bio: "Software developer and tech enthusiast",
    },
    {
        id: '2',
        username: "janedoe",
        name: "Jane Doe",
        image: "https://i.pravatar.cc/150?img=2",
        bio: "Digital artist and creative thinker"
    },
    {
        id: '3',
        username: "alexsmith",
        name: "Alex smith",
        image: "https://i.pravatar.cc/150?img=3",
        bio: "Travel photographer and adventure seeker",
    },
    {
        id: '4',
        username: "sarahjones",
        name: "Sarah Jones",
        image: "https://i.pravatar.cc/150?img=4",
        bio: "Fitness trainer and wellness coach",
    },
    {
        id: '5',
        username: "mikebrown",
        name: "Mike Brown ",
        image: "https://i.pravatar.cc/150?img=5",
        bio: "Entreorneur and startup founder"
    },
];

export const dummyPosts: Post[] = [
    {
        id: "1",
        createdAt: "2024-05-01T10:00:D0Z",
        content: "Just launched my new project!",
        user_id: "1",
        user: dummyUsers[0],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "2",
        createdAt: "2024-05-01T11:30:D0Z",
        content: "Working on some new digital art pieces.",
        user_id: "2",
        user: dummyUsers[1],
        parent_id: null,
        parent: null,
        replies: [],
    },
    {
        id: "3",
        createdAt: "2024-05-01T12:15:D0Z",
        content: "Just captured this amazing sunset.",
        user_id: "3",
        user: dummyUsers[2],
        parent_id: null,
        parent: null,
        replies: [],
    },
    {
        id: "4",
        createdAt: "2024-05-01T13:00:D0Z",
        content: "New workout routine is paying off!",
        user_id: "4",
        user: dummyUsers[3],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "5",
        createdAt: "2024-05-01T10:00:D0Z",
        content: "Congrats on the funding!",
        user_id: "5",
        user: dummyUsers[4],
        parent_id: null,
        parent: null,
        replies: []
    }
];