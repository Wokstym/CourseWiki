import { Course } from './models/course.model'

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
    courseForm: 'Labolatoria + Ćwiczenia',
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
  }
];
