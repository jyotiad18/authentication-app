import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import styled from 'styled-components';

import Register from './pages/Register'
import Login from './pages/Login'
import Personal from './pages/Personal'

const Footer = styled.div`
   display: flex;
   padding: 0px 300px;
   justify-content: center;
   font-family: Noto Sans;
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 19px;  
   letter-spacing: -0.035em;
   color: #828282;
   margin-top: 5px;
`;

const AppContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 30px;
`;

function App() {
  return (
    <Router>
    <div>     
        <Switch>                      
          <Route exact path='/profile'> 
            <Personal /> 
          </Route>    
          <AppContainer>
              <Route exact path='/login'> 
                <Login />
              </Route>
             <Route exact path='/'> 
               <Register /> 
              </Route>    
          </AppContainer>                 
        </Switch>
        <Footer>
          Jyoti ADHIAKRI @ DevChallenges.io
        </Footer>       
      </div>  
    </Router>     
  );
}

export default App;
