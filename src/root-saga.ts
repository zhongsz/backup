import { sampleWatcher, sampleRecentListWatcher, sampleArticleListWatcher } from './containers/Home/saga';

export default function* rootSaga() {
  yield [
    sampleWatcher(),
    sampleRecentListWatcher(),
    sampleArticleListWatcher()
  ];
}
