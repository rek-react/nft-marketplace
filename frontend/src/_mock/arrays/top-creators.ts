// ----------------------------------------------------------------------

import _mock from "../_mock";

interface ITopCreators {
  id: string;
  image: string;
  author: string;
  totalSales: number;
  change: string;
  volume: number;
  sold: number;
}

export const topCreators: ITopCreators[] = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  author: _mock.name.author(index),
  image: _mock.image.avatar(index),
  totalSales: 34.53,
  change: "+1.41",
  volume: 12.4,
  sold: 602,
}));
