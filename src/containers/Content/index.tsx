import * as React from 'react';
const connect = require('react-redux').connect;

import {  fetchContent } from '../Home/actions';
import {Recents } from '../Home/model';
import Button from '../../components/Button';
import NormalDiv from '../../components/Div/div';
import ArticleHead from '../../components/Div/ArticleHead';
import ArticleContent, { PaddingContent } from '../../components/Div/ArticleContent';
// import Link from '../../components/link';

interface UsersPageProps extends React.Props<Home> {
  recents:Recents
  onGetContent:(id:string)=>void;
};

class Home extends React.Component<UsersPageProps, void> {
  public render(): React.ReactElement<{}> {

    const {recents } = this.props;
    console.log({recents});
    return (
        <NormalDiv>                
            {recents.Articles.map((item, idx) => {
                return (
                // <Card
                //   key={idx}
                //   title={item.id}
                //   label={item.name}
                //   />
                <NormalDiv>
                    <ArticleHead>{item.name}</ArticleHead>
                    <ArticleContent>
                    <PaddingContent>{item.introduction}</PaddingContent>
                    <PaddingContent><Button >Read More</Button></PaddingContent>
                    </ArticleContent>                      
                </NormalDiv>
                );
            })}
        </NormalDiv>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    onGetContent:(id:string):void=>{
      dispatch(fetchContent(id));
    },
  };
}

export default connect(mapDispatchToProps)(Home);
