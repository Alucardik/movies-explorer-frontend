import img1 from '../images/mockGallery/filmMockImage_1.jpg';
import img2 from '../images/mockGallery/filmMockImage_2.jpg';
import img3 from '../images/mockGallery/filmMockImage_3.jpg';
import img4 from '../images/mockGallery/filmMockImage_4.jpg';
import img5 from '../images/mockGallery/filmMockImage_5.jpg';
import img6 from '../images/mockGallery/filmMockImage_6.jpg';
import img7 from '../images/mockGallery/filmMockImage_7.jpg';
import img8 from '../images/mockGallery/filmMockImage_8.jpg';
import img9 from '../images/mockGallery/filmMockImage_9.jpg';
import img10 from '../images/mockGallery/filmMockImage_10.jpg';
import img11 from '../images/mockGallery/filmMockImage_11.jpg';
import img12 from '../images/mockGallery/filmMockImage_12.jpg';
import img13 from '../images/mockGallery/filmMockImage_13.jpg';
import img14 from '../images/mockGallery/filmMockImage_14.jpg';
import img15 from '../images/mockGallery/filmMockImage_15.jpg';
import img16 from '../images/mockGallery/filmMockImage_16.jpg';


const mockMovies = [
  {
    name: "33 слова о дизайне",
    imgSrc: img16,
    duration: 102,
    liked: true,
  },
  {
    name: "Киноальманах «100 лет дизайна»",
    imgSrc: img15,
    duration: 102,
    liked: false,
  },
  {
    name: "В погоне за Бенкси",
    imgSrc: img14,
    duration: 102,
    liked: false,
  },
  {
    name: "Баския: Взрыв реальности",
    imgSrc: img13,
    duration: 102,
    liked: false,
  },
  {
    name: "Бег это свобода",
    imgSrc: img12,
    duration: 102,
    liked: true,
  },
  {
    name: "Книготорговцы",
    imgSrc: img11,
    duration: 102,
    liked: true,
  },
  {
    name: "Когда я думаю о Германии ночью",
    imgSrc: img10,
    duration: 102,
    liked: false,
  },
  {
    name: "Gimme Danger: История Игги и The Stooges",
    imgSrc: img9,
    duration: 102,
    liked: false,
  },
  {
    name: "Дженис: Маленькая девочка грустит",
    imgSrc: img8,
    duration: 102,
    liked: true,
  },
  {
    name: "Соберись перед прыжком",
    imgSrc: img7,
    duration: 102,
    liked: false,
  },
  {
    name: "Пи Джей Харви: A dog called money",
    imgSrc: img6,
    duration: 102,
    liked: false,
  },
  {
    name: "По волнам: Искусство звука в кино",
    imgSrc: img5,
    duration: 102,
    liked: false,
  },
  {
    name: "Рудбой",
    imgSrc: img4,
    duration: 102,
    liked: false,
  },
  {
    name: "Скейт — кухня",
    imgSrc: img3,
    duration: 102,
    liked: false,
  },
  {
    name: "Война искусств",
    imgSrc: img2,
    duration: 102,
    liked: false,
  },
  {
    name: "Зона",
    imgSrc: img1,
    duration: 102,
    liked: false,
  },
];

const movieApiBaseUrl = "https://api.nomoreparties.co/beatfilm-movies";


export  {
  mockMovies,
  movieApiBaseUrl
};
