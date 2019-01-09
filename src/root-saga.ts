import { sampleWatcher, sampleRecentListWatcher } from './containers/Home/saga';

export default function* rootSaga() {
  yield [
    sampleWatcher(),
    sampleRecentListWatcher()
  ];
}
