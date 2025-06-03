const useState = React.useState

const App = () => {
  const [view,setVies] = useState('landingPage')
    const navigateToLogin = ()=> setVies('login')
  return (
    <div> 
      {view === LandingPage && <></>}
      {view === RegisterPage && <></>}
    </div>
  )
};

//  <LandingPage/>
//  <RegisterPage/>