import news_img from "@/assets/img/news_img.png";

export interface NewsItem {
  id: number;
  dateKey: string;
  titleKey: string;
  image: string;
  images: string[];
  contentKey: string;
  paragraphKeys?: string[];
  bulletKeys?: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    dateKey: "auto2.utils.newsData.1",
    titleKey: "auto2.utils.newsData.2",
    image: news_img,
    images: [news_img, news_img, news_img, news_img],
    contentKey: "auto2.utils.newsData.3",
  },
  {
    id: 2,
    dateKey: "auto2.utils.newsData.4",
    titleKey: "auto2.utils.newsData.5",
    image: news_img,
    images: [news_img, news_img, news_img, news_img],
    contentKey: "auto2.utils.newsData.6",
  },
  {
    id: 3,
    dateKey: "auto2.utils.newsData.7",
    titleKey: "auto2.utils.newsData.8",
    image: news_img,
    images: [news_img, news_img, news_img, news_img],
    contentKey: "auto2.utils.newsData.9",
  },
  {
    id: 4,
    dateKey: "auto2.utils.newsData.10",
    titleKey: "auto2.utils.newsData.11",
    image: news_img,
    images: [news_img, news_img, news_img, news_img],
    contentKey: "auto2.utils.newsData.12",
  },
  {
    id: 5,
    dateKey: "auto2.utils.newsData.13",
    titleKey: "auto2.utils.newsData.14",
    image: news_img,
    images: [news_img, news_img, news_img, news_img],
    contentKey: "auto2.utils.newsData.15",
  },
  {
    id: 6,
    dateKey: "auto2.utils.newsData.16",
    titleKey: "auto2.utils.newsData.17",
    image: news_img,
    images: [news_img, news_img, news_img, news_img],
    contentKey: "auto2.utils.newsData.18",
  },
  {
    id: 7,
    dateKey: "auto2.utils.newsData.19",
    titleKey: "auto2.utils.newsData.20",
    image: news_img,
    images: [news_img, news_img, news_img, news_img],
    contentKey: "auto2.utils.newsData.21",
    paragraphKeys: [
      "auto2.utils.newsData.22",
      "auto2.utils.newsData.23",
      "auto2.utils.newsData.24",
      "auto2.utils.newsData.25",
    ],
    bulletKeys: [
      "auto2.utils.newsData.26",
      "auto2.utils.newsData.27",
      "auto2.utils.newsData.28",
      "auto2.utils.newsData.29",
      "auto2.utils.newsData.30",
      "auto2.utils.newsData.31",
    ],
  },
];
