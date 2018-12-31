import { sampleWatcher } from './containers/Home/saga';

export default function* rootSaga() {
  yield [
    sampleWatcher()
  ];
}
