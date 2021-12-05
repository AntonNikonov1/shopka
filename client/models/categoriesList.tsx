import React from 'react'
import {
  HangerIcon,
  CinemaIcon,
  MusicIcon,
  FitnesIcon,
  PetsIcon,
  RestarauntIcon,
  ObservationIcon,
  BarleyIcon,
} from '../components/Icons/'

export const categoriesList = [
  {
    name: 'Clothing & Shoes',
    search: '/?category=clothing',
    icon: (color: string) => <HangerIcon color={color} />,
  },
  {
    name: 'Entertainment',
    search: '/?category=entertainment',
    icon: (color: string) => <CinemaIcon color={color} />,
  },
  ,
  {
    name: 'Music',
    search: '/?category=music',
    icon: (color: string) => <MusicIcon color={color} />,
  },
  {
    name: 'Sport & Lifestyle',
    search: '/?category=sport',
    icon: (color: string) => <FitnesIcon color={color} />,
  },
  {
    name: 'Pets',
    search: '/?category=pets',
    icon: (color: string) => <PetsIcon color={color} />,
  },
  {
    name: 'Kitchen Accessories',
    search: '/?category=kitchen',
    icon: (color: string) => <RestarauntIcon color={color} />,
  },
  {
    name: 'Travel Equipment',
    search: '/?category=travel',
    icon: (color: string) => <ObservationIcon color={color} />,
  },
  {
    name: 'Growing & Garden',
    search: '/?category=garden',
    icon: (color: string) => <BarleyIcon color={color} />,
  },
]
