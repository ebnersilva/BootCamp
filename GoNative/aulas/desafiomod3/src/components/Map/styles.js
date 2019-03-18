import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonModalCancel: {
    width: 100,
    height: 40,
    margin: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonModalSave: {
    width: 100,
    height: 40,
    margin: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  titleModal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerInputModal: {
    marginTop: 20,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    height: 300,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputModal: {
    backgroundColor: '#fffa',
    borderRadius: 4,
    height: 52,
    width: 250,
    fontSize: 16,
    color: '#333',
  },
  imageMarker: {
    width: 56,
    height: 48,
  },
});

export default styles;
