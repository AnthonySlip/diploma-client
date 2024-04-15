import { privatePaths, publicPaths } from '../../../app/routes/utils';


export const useNavigation = (): { title: string, link: string }[] => {

  const paths = [
    ...Object.entries(publicPaths).filter(el => {
      if (el[1] !== publicPaths.auth) return el;
    }),
    ...Object.entries(privatePaths).filter(el => {
      if (el[1] !== privatePaths.report) return el;
    }),
  ];

  return paths.map(entries => {
    return {
      title: entries[0],
      link: entries[1],
    };
  });
};