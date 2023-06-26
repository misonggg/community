export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Username',
      // 백엔드에서 접근하는 이름
      name: 'username',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      // 어떤 타입의 배열인가에 대한 것
      of: [
        {
          // 다른 사용자의 레퍼런스를 참고
          type: 'reference',
          // 유저 타입에 대한 스키마를 참고할 것이라는 것
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Example',
      name: 'example',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
