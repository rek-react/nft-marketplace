// ----------------------------------------------------------------------

import _mock from "../_mock";

export interface NFT {
  id: string;
  image: string;
  avatar: string;
  author: string;
  nftName: string;
  price: number;
  highestBid: number;
}

export const nfts: NFT[] = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  author: _mock.name.author(index),
  nftName: _mock.name.nft(index),
  image: _mock.image.nft(index),
  avatar: _mock.image.avatar(index),
  price: 1.63,
  highestBid: 0.33,
}));
