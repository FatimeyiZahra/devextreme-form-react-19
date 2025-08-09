import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';

const styles = {
  public: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    overflow: 'hidden',
    width: 'calc(100% - ' + rem(sizes.leftMenu) + ')',
    paddingLeft: rem(20),
    paddingRight: rem(20),
  },
  active: {
    marginLeft: 0,
    width: '100%',
  },
  main: {
    paddingTop: rem(20),
    height: 'calc(100vh - 100px)',
    overflow: 'hidden',
    overflowY: 'auto',
  },
};

export const usePublicLayoutStyles = createUseStyles(styles);
