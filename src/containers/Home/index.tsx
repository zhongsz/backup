import * as React from 'react';
import { createStructuredSelector } from 'reselect';
const connect = require('react-redux').connect;

import { fetch } from './actions';
import { selectUsers, selectIsLoading, selectIsFetched } from './selectors';
import { User } from './model';

import {Container,Top, Bottom, Center, Left, Right} from '../../components/Container';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import List from '../../components/List';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SubTitle from '../../components/Header/subTitle';
import DivFlex from '../../components/Div';

interface UsersPageProps extends React.Props<Users> {
  users: Array<User>;
  isLoading: boolean;
  isFetched: boolean;
  onUsersFetch: () => void;
};

class Users extends React.Component<UsersPageProps, void> {
  public render(): React.ReactElement<{}> {

    const { users, isLoading, isFetched, onUsersFetch } = this.props;

    return (
      <Container>
        <Top>
        <DivFlex><Header>复盘</Header><SubTitle> - 我的知识回顾</SubTitle></DivFlex>
        </Top>
        <Center>
          <Left>
            {isLoading && <Preloader />}
            <List>
              {users.map((item, idx) => {
                return (
                  <Card
                    key={idx}
                    title={item.nm}
                    label={item.pp}
                    />
                );
              })}
            </List>
          </Left>
          <Right>

          </Right>        
        {!isFetched && <Button onClick={onUsersFetch}>Fetch</Button>}
        </Center>
        <Bottom>© 2019	| Proudly Powered by HIPIXZ | ZHONG</Bottom>
      </Container>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    users: selectUsers(),
    isLoading: selectIsLoading(),
    isFetched: selectIsFetched()
  });
}

function mapDispatchToProps(dispatch: any) {
  return {
    onUsersFetch: (): void => {
      dispatch(fetch());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
