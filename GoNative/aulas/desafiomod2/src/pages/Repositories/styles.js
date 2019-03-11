import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  form: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    padding: metrics.basePadding,
  },
  formIcon: {
    color: colors.dark,
  },
  formInput: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.darker,
    flex: 1,
    fontSize: 14,
    marginRight: metrics.baseMargin,
    padding: metrics.basePadding / 2,
  },
  placeholderColor: {
    color: colors.regular,
  },
});

export default styles;
