import * as React from 'react';
import { createStructuredSelector } from 'reselect';
const connect = require('react-redux').connect;

import { fetch, fetchResent, fetchContent } from './actions';
import { selectUsers, selectIsLoading, selectIsFetched, selectRecents } from './selectors';
import { Recents } from './model';

import {Container,Top, Bottom, Center, Left, Right, Body} from '../../components/Container';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import List from '../../components/List';
import Button from '../../components/Button';
import SubTitle from '../../components/Header/subTitle';
import DivFlex from '../../components/Div';
import ListItem from '../../components/ListItem';
import Content from '../Content';
// import Link from '../../components/link';

interface UsersPageProps extends React.Props<Home> {
  isLoading: boolean;
  isFetched: boolean;
  recents:Recents
  onUsersFetch: () => void;
  onResentFetch:()=> void;
  onGetContent:(id:string)=>void;
};

class Home extends React.Component<UsersPageProps, void> {
  componentWillMount(){
    console.log('test11');
    this.props.onResentFetch();
  }
  public render(): React.ReactElement<{}> {

    const { isLoading, isFetched, onUsersFetch,onResentFetch,recents,onGetContent } = this.props;
    console.log({recents});
    return (
      <Container>
        <Body>
          <Top>
            <DivFlex><Header>LPA</Header><SubTitle> - LPA</SubTitle></DivFlex>
          </Top>
          <Center>
            <Left>            
              <List>
                <DivFlex>RECENT ARTICLE</DivFlex>
                {recents.Articles.map((item, idx) => {
                  return (
                    // <Card
                    //   key={idx}
                    //   title={item.id}
                    //   label={item.name}
                    //   />
                    <ListItem key={idx} onClick={()=>onGetContent(item.id)}>{item.name}</ListItem>
                  );
                })}
              </List>

              <List>
                <DivFlex>RECENT ARTICLE</DivFlex>
                {recents.Archives.map((item, idx) => {
                  return (
                    // <Card
                    //   key={idx}
                    //   title={item.id}
                    //   label={item.name}
                    //   />
                    <ListItem key={idx} onClick={()=>onGetContent(item.id)}>{item.name}</ListItem>
                  );
                })}
              </List>
            </Left>
            <Right>             
              {/* <List>
                {users.map((item, idx) => {
                  return (
                    <Card
                      key={idx}
                      title={item.nm}
                      label={item.pp}
                      />
                  );
                })}
              </List> */}
              <Content recents={recents}></Content>
              
              {/* <NormalDiv>                
                {recents.Articles.map((item, idx) => {
                  return (
                    <NormalDiv>
                      <ArticleHead>{item.name}</ArticleHead>
                      <ArticleContent>
                        <PaddingContent>{item.introduction}</PaddingContent>
                        <PaddingContent><Button onClick={onUsersFetch}>Read More</Button></PaddingContent>
                      </ArticleContent>                      
                    </NormalDiv>
                  );
                })}
              </NormalDiv> */}
               {!isFetched && isLoading && <Button onClick={onUsersFetch}>Fetch</Button>}
              <Button onClick={onResentFetch}>FetchResent</Button>
            </Right>        
          </Center>
          <Bottom>© 2019	| Proudly Powered by HIPIXZ | ZHONG</Bottom>
        </Body>
        {isLoading && <Preloader />}
      </Container>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    users: selectUsers(),
    isLoading: selectIsLoading(),
    isFetched: selectIsFetched(),
    recents:selectRecents()
  });
}

function mapDispatchToProps(dispatch: any) {
  return {
    onUsersFetch: (): void => {
      dispatch(fetch());
    },
    onResentFetch:():void=>{
      dispatch(fetchResent());
    },
    onGetContent:(id:string):void=>{
      dispatch(fetchContent(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
