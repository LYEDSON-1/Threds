export type User = {
    avatar_url: string | undefined;
   
    id: string;
    username: string;
    name: string;
    bio: string;
};

export type Post = {
    
    id: string;
    created_at: string;
    content: string;

    user_id: string;
    user: User;

    parent_id: string | null;
    parent: Post | null;

    replies: Post[];
};