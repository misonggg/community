// session상에서 얻을 수 있는 사용자의 정보
export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

// 기존 User 타입에서 2가지만 가져옴
export type SimpleUser = Pick<User, 'username' | 'image'>;

// 기존 User 타입에 추가적인 타입 생성
export type DetailUser = User & {
  following: SimpleUser[],
  followers: SimpleUser[],
  bookmarks: string[];
}