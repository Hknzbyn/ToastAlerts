import { Center, Button, Menu } from 'native-base';
import { useDispatch } from 'react-redux';
import { showToast } from './redux/rootReducer';

const Main = () => {
  const dispatch = useDispatch();

  type Props = { text: string; toastKey: number };

  const RunToast = (props: Props) => {
    const { text, toastKey } = props;
    return (
      <Menu.Item
        onPress={() => {
          dispatch(showToast(toastKey));
        }}>
        {text}
      </Menu.Item>
    );
  };

  return (
    <Center bg='trueGray.400' flex='1'>
      <Menu
        placement='bottom'
        trigger={(triggerProps) => {
          return (
            <Button bg='emerald.500' size={'lg'} {...triggerProps}>
              Run Toast
            </Button>
          );
        }}>
        <RunToast text='Success Toast' toastKey={0} />
        <RunToast text='Error Toast' toastKey={1} />
        <RunToast text='Quit App Toast' toastKey={2} />
        <RunToast text='Connection Failed Toast' toastKey={3} />
      </Menu>
    </Center>
  );
};

export default Main;
