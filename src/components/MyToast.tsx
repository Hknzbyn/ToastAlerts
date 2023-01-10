import React, { useEffect } from 'react';
import {
  Center,
  Alert,
  Text,
  VStack,
  IconButton,
  HStack,
  CloseIcon,
} from 'native-base';
import { moderateVerticalScale } from '../utils/ResponsiveFontSize';
import { hideToast } from '../redux/rootReducer';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { ToastDetails } from '../utils/ToastDetails';

export default function MyToast() {
  const details = useSelector((state: RootState) => state.reducer.toastDetails);
  const dispatch = useDispatch();
  const id: number = details.id;
  const duration: number = ToastDetails[id].duration;
  const status: boolean = details.status;

  type IToast = {
    id: number;
    color: string;
    variant: string;
    title: string;
    description: string;
    isClosable: boolean;
    icon: JSX.Element;
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        dispatch(hideToast());
      }, duration);
    }
  }, [status]);

  const Toast = ({
    color,
    variant,
    title,
    description,
    isClosable,
    icon,
  }: IToast) => (
    <Alert
      shadow={'5'}
      w='100%'
      position={'absolute'}
      flexDirection='row'
      h={moderateVerticalScale(100)}
      variant={variant}
      bg='#2C3333'
      bottom={0}
      borderColor={color}
      borderTopColor={color}>
      <VStack w='100%'>
        <HStack alignItems='center' justifyContent='space-between'>
          <HStack alignItems='center'>
            {icon}
            <Text
              pl='2'
              fontSize={22}
              fontWeight='medium'
              numberOfLines={1}
              color={'#ffffff'}>
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant='unstyled'
              icon={<CloseIcon size='sm' color={'#ffffff'} />}
              onPress={() => dispatch(hideToast())}
            />
          ) : null}
        </HStack>
        <Center>
          <Text
            textAlign={'left'}
            w='full'
            fontSize={16}
            adjustsFontSizeToFit
            numberOfLines={3}
            pl='7'
            pr='2'
            color={'#ffffff'}>
            {description}
          </Text>
        </Center>
      </VStack>
    </Alert>
  );

  if (status === false) {
    return null;
  }
  return <Toast {...ToastDetails[id]} />;
}
