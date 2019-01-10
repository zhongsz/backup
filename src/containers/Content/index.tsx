import * as React from 'react';
const connect = require('react-redux').connect;

import {  fetchContent } from '../Home/actions';
import {Recents, ArticleResponse } from '../Home/model';
import Button from '../../components/Button';
import NormalDiv from '../../components/Div/div';
import ArticleHead from '../../components/Div/ArticleHead';
import ArticleContent, { PaddingContent } from '../../components/Div/ArticleContent';
import { createStructuredSelector } from 'reselect';
import { selectArticle } from '../Home/selectors';

interface UsersPageProps extends React.Props<Home> {
  recents:Recents
  onGetContent:(id:string)=>void;
  article:ArticleResponse
};

class Home extends React.Component<UsersPageProps, void> {
  public render(): React.ReactElement<{}> {
    let show:boolean=true;
    
    const {recents,onGetContent,article } = this.props;
    if(article.Article.id != null){
      show=false;
    }
    console.log({article});
    console.log({recents});
    return (
        <NormalDiv>                
            {show && recents.Articles.map((item, idx) => {
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
                    <PaddingContent><Button onClick={()=>onGetContent(item.id)}>Read More</Button></PaddingContent>
                    </ArticleContent>                                          
                </NormalDiv>
                );
            })}

            { !show &&
               <NormalDiv>
                <ArticleHead>{article.Article.name}</ArticleHead>
                <ArticleContent>
                <PaddingContent>{article.Article.introduction}</PaddingContent>
                </ArticleContent>                                          
              </NormalDiv>
            }
        </NormalDiv>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    article: selectArticle(),
  });
}

function mapDispatchToProps(dispatch: any) {
  return {
    onGetContent:(id:string):void=>{
      dispatch(fetchContent(id));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
