import * as React from 'react';

import Text from './Text';
import Loading from './Loading';


export interface PreloaderProps {
  text?: string
};

const defaultProps: Partial<PreloaderProps> = {
  text: 'Loading...'
};

export const Preloader: React.StatelessComponent<PreloaderProps> = ({ text }) => {
  return (
    <Loading> <Text>{text}</Text></Loading>
  );
};

Preloader.defaultProps = defaultProps;

export default Preloader;
