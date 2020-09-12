import whyUs from './about-img/features/why-us.png';
import learnAnywhere from './about-img/features/learn-anywhere.png';
import teacher from './about-img/features/teacher.png';
import teamMember1 from './about-img/slider/team-slider-1.jpg';
import teamMember2 from './about-img/slider/team-slider-2.jpg';
import teamMember3 from './about-img/slider/team-slider-3.jpg';

const aboutData = {
  aboutFeatures: [
  {
    id: '1599913259624',
    img: whyUs,
    title: "Почему мы",
    description: "Творческая мастерская с профессиональной командой, в которой вы сможете реализовать творческий потенциал. Овладеете мастерством игры на музыкальном инструменте. Познаете секреты хореографического, и актерского мастерства."
  },
  {
    id: '1599913267914',
    img: learnAnywhere,
    title: "Возможность",
    description: "Учитечь в любой точке мира. Переключайтесь между вашим компьютером, планшетом или мобильным устройством."
  },
  {
    id: '1599913295996',
    img: teacher,
    title: "Уникальность",
    description: "Учитель в любой точке мира. Переключайтесь между вашим компьютером, планшетом или мобильным устройством."
  },
],
  aboutTeam: [
    {
      id: '1599913922130',
      name: 'Алла Мишакова',
      speciality: 'Саксофон и вокал',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra orci orci tellus mattis ut nunc morbi habitant massa. Enim amet ornare turpis maecenas id massa et arcu. Sed in ac sit dui. Sed gravida at eget elit lacus adipiscing est.',
      img: teamMember1
    },
    {
      id: '1599914182341',
      name: 'Андрей Мишаков',
      speciality: 'Саксофон',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra orci orci tellus mattis ut nunc morbi habitant massa. Enim amet ornare turpis maecenas id massa et arcu. Sed in ac sit dui. Sed gravida at eget elit lacus adipiscing est.',
      img: teamMember2
    },
    {
      id: '1599914228685',
      name: 'Галина Алексеенко',
      speciality: 'Фортепиано',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra orci orci tellus mattis ut nunc morbi habitant massa. Enim amet ornare turpis maecenas id massa et arcu. Sed in ac sit dui. Sed gravida at eget elit lacus adipiscing est.',
      img: teamMember3
    },
  ],
};

export default aboutData;
