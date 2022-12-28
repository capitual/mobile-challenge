import { TouchableOpacityProps } from 'react-native';

export interface CardHeroProps extends TouchableOpacityProps {
  name: string;
  fullName: string;
  image: string;
}
