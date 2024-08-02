import { Genre, Chapter } from "./mangaDetail";
export interface MangaListProps {
  url: string;
  mangaByType: string;
  popular?: boolean;
  latest?: boolean;
  seeAll?: boolean;
}
export type bookmarkedType = {
  title: string;
  altTitle: string;
  updatedOn: string;
  rating: string;
  status: string;
  type: string;
  released: string;
  author: string;
  genre: Genre[];
  description: string;
  thumbnail: string;
  chapter: Chapter[];
};

// export type bookmarkedExample = [
//   {
//     title: "Terminally-Ill Genius Dark Knight Bahasa Indonesia",
//     altTitle: "",
//     updatedOn: "July 5, 2024",
//     rating: "7.79",
//     status: "Ongoing",
//     type: "Manhwa",
//     released: "May 17, 2023",
//     author: "Jung SeonYul",
//     genre: [
//       { title: "Action", href: "/action/" },
//       { title: "Adventure", href: "/adventure/" },
//       { title: "Fantasy", href: "/fantasy/" },
//       { title: "Game", href: "/game/" },
//       { title: "Psychological", href: "/psychological/" },
//     ],
//     description:
//       "adalah RPG Fantasy yang terkenal karena tingkat kesulitan yang ekstrim.Namun, bagi Yoo Chan yang sudah dinyatakan mengidap penyakit terminal sedari kecil, game ini adalah kehidupannya dan sekarang itu menjadi kenyataannya.Mulai detik ini, Yoo Chan harus bertahan hidup di dunia ini sebagai Nox von Reinharber, penjahat terburuk di bagian pertama game.\nApakah dia bisa menyelesaikan jalan ceritanya sampai akhir dengan selamat?",
//     thumbnail:
//       "https://komikcast.mom/wp-content/uploads/2023/05/Terminally-Ill-Genius-Dark-Knight-e1684342819472.jpg?w=400&q=70",
//     chapter: [
//       {
//         title: "Chapter 64",
//         href: "/terminally-ill-genius-dark-knight-chapter-64-bahasa-indonesia/",
//         date: "2 mins ago",
//       },
//       {
//         title: "Chapter 63",
//         href: "/terminally-ill-genius-dark-knight-chapter-63-bahasa-indonesia/",
//         date: "6 days ago",
//       },
//       {
//         title: "Chapter 62",
//         href: "/terminally-ill-genius-dark-knight-chapter-62-bahasa-indonesia/",
//         date: "2 weeks ago",
//       },
//       {
//         title: "Chapter 61",
//         href: "/terminally-ill-genius-dark-knight-chapter-61-bahasa-indonesia/",
//         date: "3 weeks ago",
//       },
//       {
//         title: "Chapter 60",
//         href: "/terminally-ill-genius-dark-knight-chapter-60-bahasa-indonesia/",
//         date: "4 weeks ago",
//       },
//       {
//         title: "Chapter 59",
//         href: "/terminally-ill-genius-dark-knight-chapter-59-bahasa-indonesia/",
//         date: "1 month ago",
//       },
//       {
//         title: "Chapter 58",
//         href: "/terminally-ill-genius-dark-knight-chapter-58-bahasa-indonesia/",
//         date: "1 month ago",
//       },
//       {
//         title: "Chapter 57",
//         href: "/terminally-ill-genius-dark-knight-chapter-57-bahasa-indonesia/",
//         date: "2 months ago",
//       },
//       {
//         title: "Chapter 56",
//         href: "/terminally-ill-genius-dark-knight-chapter-56-bahasa-indonesia/",
//         date: "2 months ago",
//       },
//       {
//         title: "Chapter 55",
//         href: "/terminally-ill-genius-dark-knight-chapter-55-bahasa-indonesia/",
//         date: "2 months ago",
//       },
//       {
//         title: "Chapter 54",
//         href: "/terminally-ill-genius-dark-knight-chapter-54-bahasa-indonesia/",
//         date: "2 months ago",
//       },
//       {
//         title: "Chapter 53",
//         href: "/terminally-ill-genius-dark-knight-chapter-53-bahasa-indonesia/",
//         date: "3 months ago",
//       },
//       {
//         title: "Chapter 52",
//         href: "/terminally-ill-genius-dark-knight-chapter-52-bahasa-indonesia/",
//         date: "3 months ago",
//       },
//       {
//         title: "Chapter 51",
//         href: "/terminally-ill-genius-dark-knight-chapter-51-bahasa-indonesia/",
//         date: "3 months ago",
//       },
//       {
//         title: "Chapter 50",
//         href: "/terminally-ill-genius-dark-knight-chapter-50-bahasa-indonesia/",
//         date: "4 months ago",
//       },
//       {
//         title: "Chapter 49",
//         href: "/terminally-ill-genius-dark-knight-chapter-49-bahasa-indonesia/",
//         date: "4 months ago",
//       },
//       {
//         title: "Chapter 48",
//         href: "/terminally-ill-genius-dark-knight-chapter-48-bahasa-indonesia/",
//         date: "4 months ago",
//       },
//       {
//         title: "Chapter 47",
//         href: "/terminally-ill-genius-dark-knight-chapter-47-bahasa-indonesia/",
//         date: "4 months ago",
//       },
//       {
//         title: "Chapter 46",
//         href: "/terminally-ill-genius-dark-knight-chapter-46-bahasa-indonesia/",
//         date: "4 months ago",
//       },
//       {
//         title: "Chapter 45",
//         href: "/terminally-ill-genius-dark-knight-chapter-45-bahasa-indonesia/",
//         date: "5 months ago",
//       },
//       {
//         title: "Chapter 44",
//         href: "/terminally-ill-genius-dark-knight-chapter-44-bahasa-indonesia/",
//         date: "5 months ago",
//       },
//       {
//         title: "Chapter 43",
//         href: "/terminally-ill-genius-dark-knight-chapter-43-bahasa-indonesia/",
//         date: "5 months ago",
//       },
//       {
//         title: "Chapter 42",
//         href: "/terminally-ill-genius-dark-knight-chapter-42-bahasa-indonesia/",
//         date: "5 months ago",
//       },
//       {
//         title: "Chapter 41",
//         href: "/terminally-ill-genius-dark-knight-chapter-41-bahasa-indonesia/",
//         date: "6 months ago",
//       },
//       {
//         title: "Chapter 40",
//         href: "/terminally-ill-genius-dark-knight-chapter-40-bahasa-indonesia/",
//         date: "6 months ago",
//       },
//       {
//         title: "Chapter 39",
//         href: "/terminally-ill-genius-dark-knight-chapter-39-bahasa-indonesia/",
//         date: "6 months ago",
//       },
//       {
//         title: "Chapter 38",
//         href: "/terminally-ill-genius-dark-knight-chapter-38-bahasa-indonesia/",
//         date: "6 months ago",
//       },
//       {
//         title: "Chapter 37",
//         href: "/terminally-ill-genius-dark-knight-chapter-37-bahasa-indonesia/",
//         date: "7 months ago",
//       },
//       {
//         title: "Chapter 36",
//         href: "/terminally-ill-genius-dark-knight-chapter-36-bahasa-indonesia/",
//         date: "7 months ago",
//       },
//       {
//         title: "Chapter 35",
//         href: "/terminally-ill-genius-dark-knight-chapter-35-bahasa-indonesia/",
//         date: "7 months ago",
//       },
//       {
//         title: "Chapter 34",
//         href: "/terminally-ill-genius-dark-knight-chapter-34-bahasa-indonesia/",
//         date: "7 months ago",
//       },
//       {
//         title: "Chapter 33",
//         href: "/terminally-ill-genius-dark-knight-chapter-33-bahasa-indonesia/",
//         date: "7 months ago",
//       },
//       {
//         title: "Chapter 32",
//         href: "/terminally-ill-genius-dark-knight-chapter-32-bahasa-indonesia/",
//         date: "8 months ago",
//       },
//       {
//         title: "Chapter 31",
//         href: "/terminally-ill-genius-dark-knight-chapter-31-bahasa-indonesia/",
//         date: "8 months ago",
//       },
//       {
//         title: "Chapter 30",
//         href: "/terminally-ill-genius-dark-knight-chapter-30-bahasa-indonesia/",
//         date: "8 months ago",
//       },
//       {
//         title: "Chapter 29",
//         href: "/terminally-ill-genius-dark-knight-chapter-29-bahasa-indonesia/",
//         date: "8 months ago",
//       },
//       {
//         title: "Chapter 28",
//         href: "/terminally-ill-genius-dark-knight-chapter-28-bahasa-indonesia/",
//         date: "9 months ago",
//       },
//       {
//         title: "Chapter 27",
//         href: "/terminally-ill-genius-dark-knight-chapter-27-bahasa-indonesia/",
//         date: "9 months ago",
//       },
//       {
//         title: "Chapter 26",
//         href: "/terminally-ill-genius-dark-knight-chapter-26-bahasa-indonesia/",
//         date: "9 months ago",
//       },
//       {
//         title: "Chapter 25",
//         href: "/terminally-ill-genius-dark-knight-chapter-25-bahasa-indonesia/",
//         date: "10 months ago",
//       },
//       {
//         title: "Chapter 24",
//         href: "/terminally-ill-genius-dark-knight-chapter-24-bahasa-indonesia/",
//         date: "10 months ago",
//       },
//       {
//         title: "Chapter 23",
//         href: "/terminally-ill-genius-dark-knight-chapter-23-bahasa-indonesia/",
//         date: "10 months ago",
//       },
//       {
//         title: "Chapter 22",
//         href: "/terminally-ill-genius-dark-knight-chapter-22-bahasa-indonesia/",
//         date: "10 months ago",
//       },
//       {
//         title: "Chapter 21",
//         href: "/terminally-ill-genius-dark-knight-chapter-21-bahasa-indonesia/",
//         date: "11 months ago",
//       },
//       {
//         title: "Chapter 20",
//         href: "/terminally-ill-genius-dark-knight-chapter-20-bahasa-indonesia/",
//         date: "11 months ago",
//       },
//       {
//         title: "Chapter 19",
//         href: "/terminally-ill-genius-dark-knight-chapter-19-bahasa-indonesia/",
//         date: "11 months ago",
//       },
//       {
//         title: "Chapter 18",
//         href: "/terminally-ill-genius-dark-knight-chapter-18-bahasa-indonesia/",
//         date: "11 months ago",
//       },
//       {
//         title: "Chapter 17",
//         href: "/terminally-ill-genius-dark-knight-chapter-17-bahasa-indonesia/",
//         date: "11 months ago",
//       },
//       {
//         title: "Chapter 16",
//         href: "/terminally-ill-genius-dark-knight-chapter-16-bahasa-indonesia/",
//         date: "12 months ago",
//       },
//       {
//         title: "Chapter 15",
//         href: "/terminally-ill-genius-dark-knight-chapter-15-bahasa-indonesia/",
//         date: "12 months ago",
//       },
//       {
//         title: "Chapter 14",
//         href: "/terminally-ill-genius-dark-knight-chapter-14-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 13",
//         href: "/terminally-ill-genius-dark-knight-chapter-13-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 12",
//         href: "/terminally-ill-genius-dark-knight-chapter-12-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 11",
//         href: "/terminally-ill-genius-dark-knight-chapter-11-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 10",
//         href: "/terminally-ill-genius-dark-knight-chapter-10-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 09",
//         href: "/terminally-ill-genius-dark-knight-chapter-09-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 08",
//         href: "/terminally-ill-genius-dark-knight-chapter-08-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 07",
//         href: "/terminally-ill-genius-dark-knight-chapter-07-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 06",
//         href: "/terminally-ill-genius-dark-knight-chapter-06-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 05",
//         href: "/terminally-ill-genius-dark-knight-chapter-05-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 04 Fix",
//         href: "/terminally-ill-genius-dark-knight-chapter-04-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 03",
//         href: "/terminally-ill-genius-dark-knight-chapter-03-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 02 Fix",
//         href: "/terminally-ill-genius-dark-knight-chapter-02-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//       {
//         title: "Chapter 01",
//         href: "/terminally-ill-genius-dark-knight-chapter-01-bahasa-indonesia/",
//         date: "1 year ago",
//       },
//     ],
//   },
// ];
