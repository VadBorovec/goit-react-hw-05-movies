import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';

import {
  Container,
  Header,
  Logo,
  LogoText,
  Navigation,
  Link,
  Footer,
  Loader,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <SiThemoviedatabase fill="#f2f2f2" size="25" />
          <LogoText>Get Movies?</LogoText>
        </Logo>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader>Loading...</Loader>}>
        <Outlet />
      </Suspense>
      <Footer>
        <p>© {new Date().getFullYear()} Get Movies App. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default Layout;
