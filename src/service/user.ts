import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  username: string;
}

export async function addUser({id, username, email, image, name}: OAuthUser) {
  // user가 존재하지 않으면 생성
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    name,
    image,
    following: [] ?? 0,
    followers: [] ?? 0,
    bookmarks: [] ?? 0,
  });
}

// Following Bar 해당 부분 ( 유저네임을 알려주면 해당 유저의 상세 정보를 반환함 )
export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->_id
    }`
  );
} 