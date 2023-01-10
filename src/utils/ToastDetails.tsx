import { WarningIcon, WarningTwoIcon, CheckIcon, InfoIcon } from 'native-base';

export const ToastDetails = [
  {
    id: 0,
    duration: 3000,
    color: '#38E54D',
    title: 'Success',
    description: 'Transaction completed successfully',
    isClosable: true,
    icon: <CheckIcon size='md' color='#38E54D' />,
    variant: 'left-accent',
  },
  {
    id: 1,
    duration: 4000,
    color: '#FF0000',
    title: 'Error',
    description: 'Something went wrong',
    isClosable: true,
    icon: <WarningIcon size='md' color='#FF0000' />,
    variant: 'top-accent',
  },
  {
    id: 2,
    duration: 1000,
    color: '#8ACBBB',
    title: 'Are you sure you want to quit?',
    description: 'Tap again to exit',
    isClosable: false,
    icon: <InfoIcon size='md' color='#8ACBBB' />,
    variant: 'outline-light',
  },
  {
    id: 3,
    duration: 5000,
    color: '#F7FF56',
    title: 'Error Connection',
    description: 'You do not have an internet connection.',
    isClosable: false,
    icon: <WarningTwoIcon size='md' color='#F7FF56' />,
    variant: 'left-accent',
  },
];
