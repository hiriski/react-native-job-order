import { ColorStatusJo } from '@/interfaces/jo';
import { createTheme } from '@/config/theme';

const { palette } = createTheme();

export const createColorProductionStatusJo = (status: string): ColorStatusJo => {
  const DEFAULT_COLOR = {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  };

  if (!status) return DEFAULT_COLOR;

  switch (status.toLowerCase()) {
    case 'waiting':
      return {
        color: '#cd940b',
        backgroundColor: '#fff4cf',
      };
    case 'in progress':
      return {
        color: '#009e2c',
        backgroundColor: '#d3fdde',
      };
    case 'selesai':
      return {
        color: '#0079ff',
        backgroundColor: '#dcecff',
      };
    case 'ditahan':
      return {
        color: '#9711ff',
        backgroundColor: '#f1dfff',
      };
    case 'ditolak':
      return {
        color: '#ff3737',
        backgroundColor: '#ffd5d5',
      };
    default:
      return DEFAULT_COLOR;
  }
};
