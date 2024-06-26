import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="flex justify-between">
          <div>Home</div>
          <div className="text-red-900">
            <Link to={'/signin'}>services  </Link ></div>
             
          <Link to={'/signup'} className="text-green">
                Get Started
        </Link>

        
          
          
      </div>
    </>
  );
};