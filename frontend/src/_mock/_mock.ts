// ----------------------------------------------------------------------

import { category } from "./assets/category";
import { author, nftName } from "./assets/name";

const _mock = {
  id: (index: number) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  name: {
    author: (index: number) => author[index],
    nft: (index: number) => nftName[index],
  },
  category: (index: number) => category[index],
  image: {
    avatar: (index: number) => `/images/avatars/avatar_${index + 1}.png`,
    cover: (index: number) => `/images/cover/cover_${index + 1}.png`,
    nft: (index: number) => `/images/nfts/nft_${index + 1}.png`,
  },
};

export default _mock;
