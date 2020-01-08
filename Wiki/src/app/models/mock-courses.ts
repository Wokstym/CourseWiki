import { Course } from './course.model'

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Podstawy Baz Danych',
    ects: 4,
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80',
    description: 'Celem wykładu jest wprowadzenie w problematykę: systemów przetwarzania danych masowych oraz technologię baz danych. Ważnym jest zrozumienie sposobu rozwiązania podstawowych problemów związanych z integracją danych oraz funkcji użytkowych. Istotnym elementem jest zapoznanie się z wielopoziomowymi modelami systemu i sposobami ich realizacji. Po zakończeniu kursu student potrafi budować proste systemy baz danych realizowane w oparciu o model relacyjny.',
    semester: 3,
    courseForm: 'Labolatoria',
    maxStudents: 12,
    grade: 5
  },
  {
    id: '2',
    name: 'Fizyka',
    ects: 6,
    image: 'https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    description: 'Słuchacz jest zorientowany w zagadnieniach dotyczących fizyki współczesnej, na poziomie ogólnym. Rozumie znaczenie mechaniki kwantowej dla współczesnych rozwiązań technologicznych.',
    semester: 3,
    courseForm: 'Ćwiczenia',
    maxStudents: 30,
    grade: 1
  },
  {
    id: '3',
    name: 'Programowanie obiektowe',
    ects: 3,
    image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80',
    description: 'Celem wykładu jest zdobycie przez studenta umiejętności programowania w języku JAVA oraz zapoznanie się z technikami programowania w tym języku.',
    semester: 3,
    courseForm: 'Labolatoria',
    maxStudents: 12,
    grade: 6
  },
  {
      id: '4',
      name: 'Rurki',
      ects: 4,
      image: 'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80',
      description: 'Wykład jest podstawowym kursem z zakresu równań różniczkowych zwyczajnych. Dwa główne tematy: jak rozwiązywać równania różniczkowe i jak interpretować te równania w kontekście fizycznym. Cechą charakterystyczną wykładu jest wyważona proporcja pomiędzy metodologią, zastosowaniami i podstawami teoretycznymi przedmiotu.',
      semester: 3,
      courseForm: 'Labolatoria',
      maxStudents: 12,
      grade: 3.5
  },
  {
    id: '5',
    name: 'Analiza matematyczna',
    ects: 6,
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego i całkowego funkcji jednej zmiennej.',
    semester: 1,
    courseForm: 'Ćwiczenia',
    maxStudents: 35,
    grade: 3,

  },
  {
    id: '6',
    name: 'Algebra liniowa',
    ects: 6,
    image: 'https://images.unsplash.com/photo-1446329360995-b4642a139973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: 'Kurs obejmuje pojęcia takie jak liczby zespolone, relacje, struktury algebraiczne, macierz, itp.',
    semester: 1,
    courseForm: 'Ćwiczenia',
    maxStudents: 22,
    grade: 4,

  },
  {
    id: '7',
    name: 'Wprowadzenie do systemu UNIX',
    ects: 4,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: 'Celem kursu jest wyposażenie studenta w umiejętność korzystania z systemu operacyjnego UNIX.',
    semester: 1,
    courseForm: 'Labolatoria',
    maxStudents: 16,
    grade: 4,

  },
  {
    id: '8',
    name: 'Wstęp do informatyki',
    ects: 6,
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: 'Celem przedmiotu jest zapoznanie z podstawowymi pojęciami informatyki i programowaniem w języku proceduralnym.',
    semester: 1,
    courseForm: 'Ćwiczenia',
    maxStudents: 22,
    grade: 2,

  },
  {
    id: '9',
    name: 'Algorytmy i struktury danych',
    ects: 6,
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: 'Przedmiot zapoznaje studentów z podstawowymi algorytmami, strukturami danych oraz metodami tworzenia algorytmów.',
    semester: 2,
    courseForm: 'Ćwiczenia',
    maxStudents: 22,
    grade: 5.33,

  },
 

 
  {
    id: '10',
    name: 'Programowanie funkcyjne',
    ects: 2,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: 'Kurs kładzie nacisk na zasady, techniki i wzorce programowania funkcyjnego, które są uniwersalne.',
    semester: 3,
    courseForm: 'Labolatoria',
    maxStudents: 18,
    grade: 5,

  },
  {
    id: '11',
    name: 'Wprowadzenie do aplikacji internetowych',
    ects: 3,
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    description: 'Celem modułu jest nabycie umiejętności tworzenia aplikacji webowych w oparciu o technologie HTML5, CSS2 i JavaScript.',
    semester: 3,
    courseForm: 'Labolatoria',
    maxStudents: 15,
    grade: 3.5,

  }
];
