import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants/Colors';

type Props = {
  children: any;
  style?: any;
}


const LinearGradientWrapper = ({ children, style }: Props) => {
  return (
    <LinearGradient style={style} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[COLORS.PRIMARY, COLORS.SECONDARY]}>
      {children}
    </LinearGradient>
  )
}

export default LinearGradientWrapper