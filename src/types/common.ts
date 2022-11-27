export type TUser = {
  avatarUrl: string;
  followers: {
    totalCount: number;
  };
  login: string
  name: string
  repositories: {
    totalCount: number
  }
};

export type TGithubGraphQL = {
  search: {
    edges: { node: TUser }[];
  };
  userCount: number;
};
