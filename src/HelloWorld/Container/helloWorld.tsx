import { connect } from 'react-redux';
import HelloWorld from '../../HelloWorld/Components/helloWorld';
export function mapStateToProps(appState: any) {
  return {
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld as any);
