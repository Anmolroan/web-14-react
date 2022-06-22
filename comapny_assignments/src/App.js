
import './App.css';
import Blogs from './components/Blogs';
import { MakeItGrid } from './components/Blogs.module';

function App() {
  return (
    <div className="App">
    <MakeItGrid>
    <Blogs blog_img="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBrZXl8ZW58MHx8MHx8&w=1000&q=80" 
     blog_header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      blog_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
     />
      <Blogs blog_img="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBrZXl8ZW58MHx8MHx8&w=1000&q=80" 
     blog_header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      blog_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
     />
      <Blogs blog_img="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBrZXl8ZW58MHx8MHx8&w=1000&q=80" 
     blog_header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      blog_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
     />

</MakeItGrid>
    
    </div>
  );
}

export default App;
