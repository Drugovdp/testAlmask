import { v1 } from "uuid";

import ourServicesImg1 from "../../images/imagePlaceholder.png";
import ourServicesImg2 from "../../images/imagePlaceholder.png";
import ourServicesImg3 from "../../images/imagePlaceholder.png";
import ourServicesImg4 from "../../images/imagePlaceholder.png";

import educationImg1 from "../../images/educationImg1.jpg";
import educationImg2 from "../../images/educationImg2.jpg";
import educationImg3 from "../../images/educationImg3.jpg";
import educationImg4 from "../../images/educationImg4.jpg";
import educationImg5 from "../../images/educationImg5.jpg";
import educationImg6 from "../../images/educationImg6.jpg";

import newsImg1 from "../../images/newsImg1.jpg";
import newsImg2 from "../../images/newsImg2.jpg";
import newsImg3 from "../../images/newsImg3.jpg";

import reviewsImg1 from "../../images/reviewsImg1.jpg";
import reviewsImg2 from "../../images/reviewsImg2.jpg";
import reviewsImg3 from "../../images/reviewsImg3.jpg";
import reviewsImg4 from "../../images/reviewsImg4.jpg";
import reviewsImg5 from "../../images/reviewsImg5.jpg";
import reviewsImg6 from "../../images/reviewsImg6.jpg";

type TypeMobileMenu = {
  id: string
  icon: string
  itemMenu: string
}

export const mobilemenu: TypeMobileMenu[] = [
  {
    id: v1(),
    icon: "M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z",
    itemMenu: 'Главная'
  },
  {
    id: v1(),
    icon: "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z",
    itemMenu: 'Обучения'
  },
  {
    id: v1(),
    icon: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z",
    itemMenu: 'Записаться'
  },
  {
    id: v1(),
    icon: "M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z",
    itemMenu: 'Тренеры'
  },
  {
    id: v1(),
    icon: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
    itemMenu: 'Контакты'
  }
]

type TypeOurServices = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export const oursevices: TypeOurServices[] = [
  {
    id: v1(),
    img: ourServicesImg1,
    title: "Название услуги 1",
    description:
      "Напишите здесь описание услуги, которую вы предлагаете, из 2-3 предложений.",
  },
  {
    id: v1(),
    img: ourServicesImg2,
    title: "Название услуги 2",
    description:
      "Напишите здесь описание услуги, которую вы предлагаете, из 2-3 предложений.",
  },
  {
    id: v1(),
    img: ourServicesImg3,
    title: "Название услуги 3",
    description:
      "Напишите здесь описание услуги, которую вы предлагаете, из 2-3 предложений.",
  },
  {
    id: v1(),
    img: ourServicesImg4,
    title: "Название услуги 4",
    description:
      "Напишите здесь описание услуги, которую вы предлагаете, из 2-3 предложений.",
  },
];

type TypeEducationState = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export const education: TypeEducationState[] = [
  {
    id: v1(),
    img: educationImg1,
    title: "Направление",
    description:
      "Напишите описание направления обучения, которое будет состоять из 2-3 предложений.",
  },
  {
    id: v1(),
    img: educationImg2,
    title: "Направление",
    description:
      "Напишите описание направления обучения, которое будет состоять из 2-3 предложений.",
  },
  {
    id: v1(),
    img: educationImg3,
    title: "Направление",
    description:
      "Напишите описание направления обучения, которое будет состоять из 2-3 предложений.",
  },
  {
    id: v1(),
    img: educationImg4,
    title: "Направление",
    description:
      "Напишите описание направления обучения, которое будет состоять из 2-3 предложений.",
  },
  {
    id: v1(),
    img: educationImg5,
    title: "Направление",
    description:
      "Напишите описание направления обучения, которое будет состоять из 2-3 предложений.",
  },
  {
    id: v1(),
    img: educationImg6,
    title: "Направление",
    description:
      "Напишите описание направления обучения, которое будет состоять из 2-3 предложений.",
  },
];

type TypeNewsState = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export const news: TypeNewsState[] = [
  {
    id: v1(),
    img: newsImg1,
    title: "Тема события / Дата события",
    description:
      "Напишите здесь о том, какие новости являются актуальными на данный момент в вашей компании. Также вы можете указать, какие акции у вас проходят с подробным описанием условий.",
  },
  {
    id: v1(),
    img: newsImg2,
    title: "Тема события / Дата события",
    description:
      "Напишите здесь о том, какие новости являются актуальными на данный момент в вашей компании. Также вы можете указать, какие акции у вас проходят с подробным описанием условий.",
  },
  {
    id: v1(),
    img: newsImg3,
    title: "Тема события / Дата события",
    description:
      "Напишите здесь о том, какие новости являются актуальными на данный момент в вашей компании. Также вы можете указать, какие акции у вас проходят с подробным описанием условий.",
  },
];

type TypeReviewsState = {
  id: string;
  img: string;
  name: string;
  description: string;
};

export const reviews: TypeReviewsState[] = [
  {
    id: v1(),
    img: reviewsImg1,
    name: "Татьяна Викторова",
    description:
      'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
  },
  {
    id: v1(),
    img: reviewsImg2,
    name: "Татьяна Викторова",
    description:
      'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
  },
  {
    id: v1(),
    img: reviewsImg3,
    name: "Татьяна Викторова",
    description:
      'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
  },
  {
    id: v1(),
    img: reviewsImg4,
    name: "Татьяна Викторова",
    description:
      'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
  },
  {
    id: v1(),
    img: reviewsImg5,
    name: "Татьяна Викторова",
    description:
      'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
  },
  {
    id: v1(),
    img: reviewsImg6,
    name: "Татьяна Викторова",
    description:
      'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
  },
];
