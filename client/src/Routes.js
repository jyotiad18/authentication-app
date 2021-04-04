import {
  BrowserRouter as Router,
  Switch,
	Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

import Register from './pages/Register'
import Login from './pages/Login'
import Personal from './pages/Personal'
import SocialLogin from './pages/SocialLogin';
import DashBoard from './pages/DashBoard';
import Header from './components/Header';
import { getLocalStorage } from './utils/utils';

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
  @media (max-width: 640px) {
	   padding: 0px 30px;
	}
`;

const AppContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 30px;
`;

const DashBoardContainer = styled.div`
   border-radius: 24px;
	 padding: 26px 72px 0px 72px;	
	 width: 100%;
   @media (max-width: 640px) {
	  padding: 26px 10px 0px 10px;
	}
`;

function Routes() {		
  return (
    <Router>
    <div>     
        <Switch>              
				  <Route exact path='/dashboard'
					  render={() => getLocalStorage() ?
						  <DashBoardContainer>
							  <Header />
							  <DashBoard />
						  </DashBoardContainer>
						  :
						  <Redirect to={{pathname: '/login'}} />
					} 
				  />     
				  <Route exact path='/profile'
					  render={() => getLocalStorage() ? 
						   <DashBoardContainer>
								<Header />
								 <Personal />
						  </DashBoardContainer> 
						  :
						 <Redirect to={{pathname: '/login'}} />
					} 
				  />                  
				<AppContainer> 
					<Route exact path='/socallogin/:socialID'> 
						<SocialLogin />
					</Route>
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

export default Routes;
