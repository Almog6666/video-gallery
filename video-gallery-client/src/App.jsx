import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import UploadPage from './pages/FileUpload';
import Gallery from './pages/Gallery';
import PreviewPage from './pages/PreviewPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route key='/upload' path='/upload'>
            <UploadPage></UploadPage>
          </Route>
          <Route key='/preview' path='/preview/:thumbnailfilename'>
            <PreviewPage></PreviewPage>
          </Route>
          <Route key='/' path='/'>
            <Gallery></Gallery>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
